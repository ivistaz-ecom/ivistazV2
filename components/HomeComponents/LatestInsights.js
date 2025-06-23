"use client";

import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { LazyMotion, domAnimation, m } from "motion/react";
import Image from "next/image";

const LatestInsights = ({ isVisible }) => {
  const [data, setData] = useState([]);
  const [visibleData, setVisibleData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let allData = [];
        let page = 1;
        let hasMore = true;

        while (hasMore) {
          const response = await fetch(
            `https://docs.ivistaz.com/wp-json/wp/v2/blogs?_embed&production_mode[]=9&per_page=3&page=${page}`
          );

          if (response.ok) {
            const pageData = await response.json();
            if (pageData.length > 0) {
              allData = [...allData, ...pageData];
              page++;
            } else {
              hasMore = false;
            }
          } else {
            hasMore = false;
          }
        }

        setData(allData);
        setVisibleData(allData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-black pb-10 w-full border-b-2 border-dashed border-[#2D2D2D]">
      <div className="container mx-auto flex justify-between items-end">
        <div>
          <h4 className="text-white text-4xl sm:text-6xl py-10">
            Stay Informed <br className="hidden sm:block" /> with Our Latest
            Insights
          </h4>
        </div>
        <div className="flex gap-2 justify-end">
          <button onClick={scrollPrev} className="p-2 rounded-full transition">
            <Image
              alt="arrow"
              src="/new-home-page/white-arrow-right.png"
              width={25}
              height={25}
              className="rotate-180 lg:w-7 lg:h-7"
            />
          </button>
          <button
            onClick={scrollNext}
            className="p-2 rounded-full text-white transition"
          >
            <Image
              alt="arrow white"
              src="/new-home-page/white-arrow-right.png"
              width={25}
              height={25}
              className="lg:w-7 lg:h-7"
            />
          </button>
        </div>
      </div>

      <div className="container mx-auto mt-10">
        {loading ? (
          <LazyMotion features={domAnimation}>
            <div className="flex gap-6 overflow-hidden">
              {[1, 2, 3].map((_, index) => (
                <m.div
                  key={index}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.3333%] flex flex-col animate-pulse border border-[#2d2d2d] rounded-lg shadow-sm overflow-hidden bg-[#1a1a1a]"
                >
                  <div className="h-[220px] bg-gray-700 w-full" />
                  <div className="p-4 space-y-3">
                    <div className="h-4 w-1/3 bg-gray-600 rounded" />
                    <div className="h-5 w-3/4 bg-gray-600 rounded" />
                    <div className="h-4 w-2/3 bg-gray-600 rounded" />
                  </div>
                </m.div>
              ))}
            </div>
          </LazyMotion>
        ) : visibleData.length > 0 ? (
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {visibleData.map((post) => (
                <div
                  key={post.id}
                  className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.3333%]"
                >
                  <Link href={`/blogs/${post.slug}`} className="block h-full">
                    <div className="flex flex-col h-full shadow-sm overflow-hidden">
                      {post.acf?.thumbnail_image?.url && (
                        <Image
                          src={post.acf.thumbnail_image.url}
                          alt={post.title.rendered}
                          width={600}
                          height={220}
                          className="w-full object-cover h-[220px]"
                        />
                      )}
                      <div className="p-4 flex flex-col justify-between flex-grow">
                        <p className="text-sm text-gray-400 mb-1  px-4">
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                          })}
                        </p>
                        <h5 className="text-lg font-semibold mb-2 text-white px-4">
                          {post.title.rendered}
                        </h5>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="w-full text-center text-white">No blogs found.</div>
        )}
      </div>
    </div>
  );
};

export default LatestInsights;
