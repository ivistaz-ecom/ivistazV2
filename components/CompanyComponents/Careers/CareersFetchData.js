"use client";
import React, { useState, useEffect } from "react";
import ConfigData from "../../../config";
import CareerForm from "./CareerForm";
// import CareerForms from "../Forms/CareerForms";
import { motion } from "framer-motion";
const CareersFetchData = () => {
  const options = [
    {
      value: "seo_&_social_media_executive",
      label: "SEO & Social Media Executive",
    },
    { value: "inside_sales_executive", label: "Inside Sales Executive" },
    { value: "account_executive", label: "Account Executive" },
    { value: "ui_ux_designer", label: "UI/Graphic Designer" },
  ];

  const categoryId = 25;
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [visibleItems, setVisibleItems] = useState(4);
  const [isLoading, setIsLoading] = useState(true);

  const siteUrl = ConfigData.wpApiUrl;
  const serverUrl = ConfigData.SERVER;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${siteUrl}/careers?categories=${categoryId}&_embed&production_mode[]=${serverUrl}`
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [siteUrl, serverUrl]);

  const handleLoadMore = () => {
    setVisibleItems((prevCount) => prevCount + 3);
  };

  const handleShowModal = (item) => {
    setSelectedItem(item);
    setIsOpen(true);
    document.body.style.overflow = "hidden"; // Disable scrolling
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedItem(null);
    document.body.style.overflow = ""; // Enable scrolling
  };

  const handleFormSuccess = () => {
    setIsOpen(false);
  };

  return (
    <div className="container mx-auto bg-white text-black mb-10 px-4 lg:px-0">
      <style>{`input[type="file"] { color: white; }`}</style>

      <div className="flex flex-col space-y-6">
        <div>
          <h1 className="text-2xl lg:text-[64px] font-monument-bold">CAREERS</h1>
          <p className="mt-2 text-lg">
            We are a vibrant digital marketing agency with a team that brings
            diverse perspectives and creative energy to our projects. At
            iVistaz, we take pride in our collaborative and supportive
            environment where work and learning go hand-in-hand. Our projects
            range from web development, paid marketing, social media campaigns
            and email marketing, offering you the chance to build on your
            experience and develop a broad skill set. Located in the heart of
            the city, our office is easily accessible and surrounded by a
            vibrant mix of offices, shopping streets, restaurants, and parks.
            Check out our current openings and take the next step in your career
            with iVistaz.
          </p>
        </div>

        <div>
          <h2 className="lg:text-[40px] text-2xl font-monument-bold">CURRENT OPENINGS</h2>
        </div>

        <div className="z-10">
          {isLoading ? (
            // Skeleton Loaders
            Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="bg-white shadow-sm rounded-lg p-6 my-4 border border-gray-200 animate-pulse"
              >
                <div className="h-6 bg-gray-300 rounded w-1/2 mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-300 rounded w-full"></div>
                  <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                </div>
                <div className="mt-6 h-10 bg-gray-300 rounded w-40"></div>
              </div>
            ))
          ) : data && data.length > 0 ? (
            data.slice(0, visibleItems).map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-sm rounded-lg p-6 my-4 border border-gray-200 hover:bg-[#ED2224] transition duration-300 hover:text-white"
              >
                <div className="">
                  <div className="flex-1">
                    <p
                      className="lg:text-[28px] text-xl font-monument-bold mb-2"
                      dangerouslySetInnerHTML={{ __html: item.title.rendered }}
                    />
                    <ul className="list-disc lg:pl-10 pl-5 space-y-2 lg:text-xl">
                      {item.content.rendered
                        .replace(/<[^>]+>/g, "") // Remove all HTML tags
                        .split(/[.\n•]/) // Split by full stop, newline, bullet, dash
                        .map((point, index) => {
                          const cleaned = point.trim();
                          return cleaned ? (
                            <li key={index}>{cleaned}</li>
                          ) : null;
                        })}
                    </ul>
                  </div>
                  <div className="mt-10 ">
                    <button
                      onClick={() => handleShowModal(item)}
                      className="btn-16 w-60"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-700">
              <span>Currently No Openings</span>
            </div>
          )}
        </div>

        {data.length > visibleItems && (
          <div className="text-center flex justify-center">
            <button onClick={handleLoadMore} className="btn-15">
              Load More
            </button>
          </div>
        )}

        {isOpen && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            {/* Backdrop with blur effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm cursor-pointer h-screen"
            ></motion.div>

            {/* Modal content */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto z-50 p-6 lg:p-10"
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-black hover:text-red-500 text-xl font-bold"
              >
                &times;
              </button>
              <div className="text-black">
                <CareerForm onSuccess={handleFormSuccess} />
              </div>
            </motion.div>
          </motion.div>
        )}
        <p className="text-lg mt-6">
          For enquiries about any positions not listed, please email
          <a
            href="mailto:careers@ivistaz.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 underline ml-1"
          >
            careers@ivistaz.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default CareersFetchData;
