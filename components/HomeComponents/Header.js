"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuItems } from "@/utils/MenuItems";

const Header = () => {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  if (pathname === "/") return null;

  return (
    <>
      <div className="bg-black text-white fixed w-full z-50">
        <div className="container mx-auto flex items-center justify-between px-4 lg:px-0 py-4">
          <div className="flex items-center">
            <Link href="/welcome">
              <Image
                src="/ivista_logo.svg"
                width={200}
                height={100}
                alt="logo"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-10 items-center">
            {menuItems.map((item, index) => (
              <div key={index} className="relative">
                {item.pageLink ? (
                  <Link
                    href={item.pageLink}
                    onClick={() =>
                      setActiveMenu(activeMenu === index ? null : index)
                    }
                    className={`transition flex items-center gap-1 ${
                      pathname === item.pageLink
                        ? "text-red-500"
                        : "hover:text-red-500"
                    }`}
                  >
                    {item.title}
                    {item.submenu.length > 0 && (
                      <IoIosArrowDown className="text-xs" />
                    )}
                  </Link>
                ) : (
                  <span
                    onClick={() =>
                      setActiveMenu(activeMenu === index ? null : index)
                    }
                    className={`transition flex items-center gap-1 cursor-default ${
                      item.submenu.some((s) => s.pageLink === pathname)
                        ? "text-red-500"
                        : "hover:text-red-500"
                    }`}
                  >
                    {item.title}
                    {item.submenu.length > 0 && (
                      <IoIosArrowDown className="text-xs" />
                    )}
                  </span>
                )}

                {hasMounted && (
                  <AnimatePresence>
                    {activeMenu === index && item.submenu.length > 0 && (
                      <motion.div
                        className="fixed top-[6.2%] left-0 w-full bg-white text-black z-40 shadow-lg"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="grid grid-cols-4 border-t border-l border-gray-300">
                          {item.submenu.map((sub, subIndex) => (
                            <Link
                              key={subIndex}
                              href={sub.pageLink}
                              onClick={() => setActiveMenu(null)}
                              className="group relative flex flex-col justify-center p-4 py-7 border-b border-r border-gray-300 overflow-hidden"
                            >
                              <span
                                className={`relative z-10 flex items-center justify-between font-semibold transition-colors duration-300 ${
                                  pathname === sub.pageLink ? "text-white" : ""
                                } group-hover:text-white`}
                              >
                                {sub.label}
                                <div className="relative w-4 h-4">
                                  <Image
                                    src="/new-home-page/black-arrow.png"
                                    alt="arrow"
                                    fill
                                    className={`object-contain transition-opacity duration-300 ${
                                      pathname === sub.pageLink
                                        ? "opacity-0"
                                        : ""
                                    } group-hover:opacity-0`}
                                  />
                                  <Image
                                    src="/new-home-page/white-arrow-right.png"
                                    alt="arrow"
                                    fill
                                    className={`object-contain opacity-0 transition-opacity duration-300 ${
                                      pathname === sub.pageLink
                                        ? "opacity-100"
                                        : ""
                                    } group-hover:opacity-100`}
                                  />
                                </div>
                              </span>
                              {sub.description && (
                                <span
                                  className={`relative z-10 text-sm mt-2 transition-colors duration-300 ${
                                    pathname === sub.pageLink
                                      ? "text-white"
                                      : ""
                                  } group-hover:text-white`}
                                >
                                  {sub.description}
                                </span>
                              )}
                              {/* background: animate on hover, or fixed if active */}
                              <span
                                className={`absolute left-0 top-0 h-full z-0 transition-all duration-500 ease-in-out ${
                                  pathname === sub.pageLink
                                    ? "w-full bg-gradient-to-r from-[#570E7E] to-[#0A3586]"
                                    : "w-0 group-hover:w-full bg-gradient-to-r from-[#570E7E] to-[#0A3586]"
                                }`}
                              />
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}

            <Link href="/case-studies">
              <button className="relative py-2 px-4 bg-[#D0AC59] rounded-full overflow-hidden group hover:text-black text-white duration-200 transition">
                <span className="absolute inset-0 bg-white  transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
                <span className="relative z-10">Case Studies</span>
              </button>
            </Link>

            <div className="bg-[#111] p-2 rounded-full">
              <FaSearch className="text-white" />
            </div>
          </nav>

          {/* Hamburger */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {hasMounted && (
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                className="md:hidden bg-black text-white w-full px-4 py-6 space-y-4"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
              >
                {menuItems.map((item, index) => (
                  <div
                    key={index}
                    className={
                      mobileDropdown !== null && mobileDropdown !== index
                        ? "hidden"
                        : ""
                    }
                  >
                    {item.submenu.length > 0 ? (
                      <button
                        className="flex justify-between w-full text-left font-medium py-2"
                        onClick={() => {
                          if (mobileDropdown === index) {
                            setMobileDropdown(null);
                          } else {
                            setMobileDropdown(index);
                            // hide all other items
                          }
                        }}
                      >
                        <span
                          className={`${
                            pathname === item.pageLink ||
                            item.submenu.some((s) => s.pageLink === pathname)
                              ? "text-red-500"
                              : ""
                          }`}
                        >
                          {item.title}
                        </span>
                        <IoIosArrowDown />
                      </button>
                    ) : (
                      <Link
                        href={item.pageLink || "#"}
                        onClick={() => setMobileOpen(false)}
                        className={`block w-full text-left font-medium py-2 ${
                          pathname === item.pageLink
                            ? "text-red-500"
                            : "hover:text-red-600"
                        }`}
                      >
                        {item.title}
                      </Link>
                    )}

                    <AnimatePresence initial={false}>
                      {mobileDropdown === index && item.submenu.length > 0 && (
                        <div className="overflow-hidden pl-4 pt-2 space-y-2 text-black bg-white transition-all duration-300 ease-in-out max-h-[1000px]">
                          {item.submenu.map((sub, subIndex) => (
                            <Link
                              key={subIndex}
                              href={sub.pageLink}
                              onClick={() => {
                                setMobileDropdown(null);
                                setMobileOpen(false);
                              }}
                              className={`block text-sm py-2 transition ${
                                pathname === sub.pageLink
                                  ? "text-red-500"
                                  : "hover:text-red-600"
                              }`}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                <Link href="/case-studies">
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="relative py-2 px-4 bg-white rounded-full overflow-hidden group text-black"
                  >
                    <span className="absolute inset-0 bg-[#D0AC59] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
                    <span className="relative z-10">Case Studies</span>
                  </button>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </>
  );
};

export default Header;
