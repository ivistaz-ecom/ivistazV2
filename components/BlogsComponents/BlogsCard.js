"use client";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import ConfigData from "../../config";

const BlogsCard = () => {
  const siteUrl = ConfigData.wpApiUrl;
  const serverUrl = ConfigData.SERVER;
  const [data, setData] = useState([]);
  const [visibleData, setVisibleData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let allData = [];
        let page = 1;
        let hasMore = true;

        while (hasMore) {
          const response = await fetch(
            `${siteUrl}/blogs?_embed&production_mode[]=${serverUrl}&per_page=100&page=${page}`
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
        setVisibleData(allData.slice(0, 6));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [siteUrl, serverUrl]);

  const handleLoadMore = () => {
    const newVisibleCount = visibleCount + 6;
    setVisibleData(data.slice(0, newVisibleCount));
    setVisibleCount(newVisibleCount);
  };

  return (
    <div className="bg-white pb-10 px-4 lg:px-0">
      <div className="container mx-auto">
        <h1 className="lg:text-[64px] text-2xl font-monument-bold text-black mb-2">
          BLOGS
        </h1>
        <p className="lg:text-[28px] font-monument-bold text-gray-800 mb-3">
          Stay Informed with Our Latest Insights on Digital Marketing
        </p>
        <p className="text-lg font-monument-light">
          Explore our blog page to gain valuable insights, industry trends, and
          expert advice on digital marketing, helping you stay ahead of the
          curve and make informed decisions for your business.
        </p>
      </div>

      <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col bg-gray-200 animate-pulse shadow-md rounded-lg overflow-hidden"
            >
              <div className="w-full h-[220px] bg-gray-300"></div>
              <div className="p-4 space-y-4 flex-grow">
                <div className="h-5 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                <div className="mt-4 flex justify-between items-center">
                  <div className="h-4 bg-gray-300 rounded w-24"></div>
                  <div className="h-4 bg-gray-300 rounded w-20"></div>
                </div>
              </div>
            </div>
          ))
        ) : visibleData.length > 0 ? (
          visibleData.map((post) => (
            <div
              key={post.id}
              className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden iv-cards transition duration-300"
            >
              {post.acf?.thumbnail_image?.url && (
                <img
                  src={post.acf.thumbnail_image.url}
                  alt={post.title.rendered}
                  className="w-full h-[220px] object-cover"
                  loading="lazy"
                />
              )}
              <div className="p-4 flex flex-col justify-between flex-grow card-body">
                <h5
                  className="text-xl font-semibold mb-2 card-title"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
                <div className="flex flex-col mt-auto">
                  <div className="mt-4 flex justify-between items-center">
                    <Link href={`/blogs/${post.slug}`} className="iv-link">
                      <p className="flex items-center gap-3">
                        {" "}
                        Read more <FaArrowRight className="icons" size={20} />
                      </p>
                    </Link>
                    <p className="card-date">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No blogs found.</div>
        )}
      </div>

      {visibleCount < data.length && (
        <div className="flex justify-center mt-10">
          <button onClick={handleLoadMore} className="btn-15">
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogsCard;
