"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import ConfigData from "../../config.js";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export const HoverEffect = ({ items, className }) => {
  const siteUrl = ConfigData.wpApiUrl;
  const serverUrl = ConfigData.SERVER;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const fetchBlogs = async (pageNum) => {
    try {
      const response = await fetch(
        `${siteUrl}/blogs?_embed&production_mode[]=${serverUrl}&per_page=6&page=${pageNum}`
      );

      if (!response.ok) {
        setHasMore(false);
        return;
      }

      const newData = await response.json();

      if (newData.length === 0) {
        setHasMore(false);
      } else {
        setData((prevData) => {
          const existingIds = new Set(prevData.map((post) => post.id));
          const filtered = newData.filter((post) => !existingIds.has(post.id));
          return [...prevData, ...filtered];
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    fetchBlogs(1);
  }, []);

  const handleLoadMore = () => {
    setLoadingMore(true);
    const nextPage = page + 1;
    setPage(nextPage);
    fetchBlogs(nextPage);
  };

  const renderSkeletons = () =>
    Array.from({ length: 6 }).map((_, idx) => (
      <div key={idx} className="p-2">
        <div className="animate-pulse rounded-2xl bg-white p-4 shadow">
          <div className="h-[220px] bg-gray-300 rounded-xl mb-4" />
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2" />
          <div className="h-3 bg-gray-200 rounded w-1/2" />
        </div>
      </div>
    ));

  return (
    <>
      <style jsx>{`
        .post-content-title {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      `}</style>
      <div className="container mx-auto">
        <div className="container mx-auto lg:px-0 px-4">
          <h1 className="lg:text-[64px] text-2xl font-monument-bold text-black mb-2">
            BLOGS
          </h1>
          <p className="lg:text-[28px] font-monument-bold text-gray-800 mb-3">
            Stay Informed with Our Latest Insights on Digital Marketing
          </p>
          <p className="text-lg font-monument-light">
            Explore our blog page to gain valuable insights, industry trends,
            and expert advice on digital marketing, helping you stay ahead of
            the curve and make informed decisions for your business.
          </p>
        </div>
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
            className
          )}
        >
          {loading ? (
            renderSkeletons()
          ) : data.length > 0 ? (
            data.map((post, idx) => (
              <a
                href={`/blogs/${post.slug}`}
                key={post.id}
                className="relative group block p-2 h-full w-full"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.span
                      className="absolute inset-0 h-full w-full bg-[#ed2225] block rounded-3xl"
                      layoutId="hoverBackground"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { duration: 0.15 } }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.15, delay: 0.2 },
                      }}
                    />
                  )}
                </AnimatePresence>
                <Card>
                  <img
                    src={post.acf?.thumbnail_image?.url}
                    alt={post.title.rendered}
                    className="w-full  object-cover"
                    loading="lazy"
                  />
                  <CardTitle className="flex flex-col justify-end h-full">
                    <div>
                      <h5
                        className="text-xl font-semibold mb-2 text-black post-content-title"
                        dangerouslySetInnerHTML={{
                          __html: post.title.rendered,
                        }}
                      />
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <Link href={`/blogs/${post.slug}`} className="iv-link">
                        <p className="flex items-center gap-3 justify-end group-hover:underline group-hover:text-[#ed2225] group-hover:underline-offset-4 transition duration-200">
                          Read more{" "}
                          <FaArrowRight
                            className="icons group-hover:-rotate-45 transition duration-200"
                            size={20}
                          />
                        </p>
                      </Link>
                      <p className="card-date">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                        })}
                      </p>
                    </div>
                  </CardTitle>
                </Card>
              </a>
            ))
          ) : (
            <p>No data available</p>
          )}
        </div>

        {hasMore && (
          <div className="flex justify-center my-5">
            <button
              onClick={handleLoadMore}
              className="btn-15"
              disabled={loadingMore}
            >
              {loadingMore ? "Loading..." : "Load More"}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export const Card = ({ className, children }) => (
  <div
    className={cn(
      "rounded-2xl h-full w-full overflow-hidden shadow bg-white border group-hover:border-0 dark:border-white/[0.2] relative z-20",
      className
    )}
  >
    <div className="relative z-50">
      <div className="p-4">{children}</div>
    </div>
  </div>
);

export const CardTitle = ({ className, children }) => (
  <h4 className={cn("text-gray-700 font-bold tracking-wide mt-4", className)}>
    {children}
  </h4>
);

export const CardDescription = ({ className, children }) => (
  <p
    className={cn(
      "mt-8 text-gray-950 tracking-wide leading-relaxed text-sm",
      className
    )}
  >
    {children}
  </p>
);
