"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const HomePage = () => {
  const [showSecondSection, setShowSecondSection] = useState(false);
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const secondSectionRef = useRef(null);
  const touchStartY = useRef(0);
  const pathname = usePathname();
  const [domainName, setDomainName] = useState("");

  useEffect(() => {
    const handleWheelScroll = (event) => {
      const deltaY = event.deltaY;
      if (deltaY > 0 && !showSecondSection) {
        setShowSecondSection(true);
        setIsScrollLocked(true);
      }
    };

    const handleTouchStart = (event) => {
      touchStartY.current = event.touches[0].clientY;
    };

    const handleTouchMove = (event) => {
      const touch = event.touches[0];
      const deltaY = touchStartY.current - touch.clientY;
      if (deltaY > 0 && !showSecondSection) {
        setShowSecondSection(true);
        setIsScrollLocked(true);
      }
    };

    window.addEventListener("wheel", handleWheelScroll, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheelScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [showSecondSection]);

  useEffect(() => {
    if (secondSectionRef.current) {
      const handleScroll = () => {
        secondSectionRef.current.scrollIntoView({ behavior: "smooth" });
      };
      window.addEventListener("click", handleScroll);
      return () => window.removeEventListener("click", handleScroll);
    }
  }, [secondSectionRef.current]);

  useEffect(() => {
    if (isScrollLocked) {
      const lockScroll = (event) => {
        event.preventDefault();
        event.stopPropagation();
      };
      window.addEventListener("wheel", lockScroll, { passive: false });
      window.addEventListener("touchmove", lockScroll, { passive: false });
      return () => {
        window.removeEventListener("wheel", lockScroll);
        window.removeEventListener("touchmove", lockScroll);
      };
    }
  }, [isScrollLocked]);

  return (
    <>
      {/* Fixed logo and skip button */}
      <div className="fixed lg:top-32 top-10 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-center">
        <Image src="/ivista_logo.svg" width={300} height={80} alt="IVISTAZ Logo" />
      </div>
      <Link
        href="/welcome"
        className="fixed top-6 right-6 md:right-10 bg-white text-black py-2 px-3 text-sm font-medium font-[monument] rounded-md hover:shadow-md z-50"
      >
        Skip
      </Link>

      {/* Intro section */}
      <div className={`iv-bg z-0 ${showSecondSection ? "hidden" : "block"} w-full min-h-screen`}>
        <div className="flex flex-col items-center justify-between min-h-screen pt-[300px]">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-white text-3xl md:text-[60px] font-monument-bold pb-3">WHAT DOES</h2>
            <div className="text lg:text-[70px] font-monument-bold">
              <span>P</span><span>E</span><span>R</span><span>F</span><span>O</span>
              <span>R</span><span>M</span><span>A</span><span>N</span><span>C</span><span>E</span>
            </div>
            <h2 className="text-white text-3xl md:text-[60px] font-monument-bold pt-3"> MEAN TO YOU?</h2>
          </div>

          <div className="flex flex-col justify-center items-center z-0">
            <div onClick={() => setShowSecondSection(true)}></div>
            <div
              className="scroll-down cursor-pointer"
              onClick={() => setShowSecondSection(true)}
            ></div>
          </div>
        </div>
      </div>

      {/* Second section */}
      <div
        className={`iv-bg min-h-screen fixed top-0 left-0 w-full z-30 overflow-y-auto ${showSecondSection ? "block" : "hidden"}`}
        ref={secondSectionRef}
      >
        <div className="flex flex-col items-center justify-between min-h-screen lg:pt-[250px] pt-[50px] pb-10">
          <div className="flex flex-col justify-center items-center mt-20 md:mt-0">
            <h2 className="text-white text-3xl md:text-[60px] font-monument-bold pb-3">WHAT DOES</h2>
            <div className="text">
              <span>P</span><span>E</span><span>R</span><span>F</span><span>O</span>
              <span>R</span><span>M</span><span>A</span><span>N</span><span>C</span><span>E</span>
            </div>
            <h2 className="text-white text-3xl md:text-[60px] font-monument-bold pt-3">MEAN TO YOU?</h2>
          </div>

          <motion.div
            className="flex flex-col items-center"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.25 } },
            }}
          >
            <div className="flex flex-col md:flex-row items-center justify-end gap-3 w-full max-w-2xl">
              {[
                { href: "/sales", src: "/mainpage/online_sale.svg", text: "Online Sales" },
                { href: "/leads", src: "/mainpage/leads.svg", text: "Leads" },
                { href: "/traffic", src: "/mainpage/traffic.svg", text: "Traffic" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  <Link
                    href={item.href}
                    className="btn h-btn blurb-ripple-out flex items-center gap-2 justify-center w-3/4 overflow-hidden"
                  >
                    <Image src={item.src} alt={item.text} width={30} height={30} />
                    <span>{item.text}</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-3 pt-6 w-full max-w-3xl">
              {[
                { href: "/keyword-ranking", src: "/mainpage/keyword.svg", text: "Keyword Ranking" },
                { href: "/engagement", src: "/mainpage/engagement.svg", text: "Engagement" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 0.3 * (idx + 3),
                  }}
                >
                  <Link
                    href={item.href}
                    className="btn h1-btn blurb-ripple-out flex items-center gap-2 justify-center w-3/4 overflow-hidden"
                  >
                    <Image src={item.src} alt={item.text} width={30} height={30} />
                    <span>{item.text}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
      
        .text {
          font-size: clamp(20px, 4vw, 4rem);
          letter-spacing: 5px;
          font-weight: 700 !important;
          color: #fff;
        }
        .text span {
          display: inline-block;
          animation: pop 0.4s ease-in-out;
          font-size: 70px !important;
        }
        .text span:nth-child(1) { animation-delay: 0.1s; }
        .text span:nth-child(2) { animation-delay: 0.2s; }
        .text span:nth-child(3) { animation-delay: 0.3s; }
        .text span:nth-child(4) { animation-delay: 0.4s; }
        .text span:nth-child(5) { animation-delay: 0.5s; }
        .text span:nth-child(6) { animation-delay: 0.6s; }
        .text span:nth-child(7) { animation-delay: 0.7s; }
        .text span:nth-child(8) { animation-delay: 0.8s; }
        .text span:nth-child(9) { animation-delay: 0.9s; }
        .text span:nth-child(10) { animation-delay: 1s; }
        .text span:nth-child(11) { animation-delay: 1.1s; }

        @keyframes pop {
          0% {
            transform: scale(1);
            opacity: 0;
          }
          50% {
            transform: scale(1.5);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .iv-bg {
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
          @media (max-width: 767px) {
        .text span {
          display: inline-block;
          animation: pop 0.4s ease-in-out;
          font-size: 25px !important;
        }
  }
      `}</style>
    </>
  );
};

export default HomePage;


// 'use client'
// import React, { useEffect, useState, useRef } from "react";
// import Image from "next/image";
// import Link from "next/link";
// // import SeoComponents from "../SeoComponents/Seo";
// import { usePathname } from "next/navigation";

// const HomePage = () => {
//   const [showSecondSection, setShowSecondSection] = useState(false);
//   const [isScrollLocked, setIsScrollLocked] = useState(false);
//   const secondSectionRef = useRef(null);
//   const touchStartY = useRef(0);
//   const pathname = usePathname();

//   const title = "Performance Marketing Services ";
//   const description =
//     "Discover top-notch performance marketing services with iVistaz. Our expert team offers innovative solutions to boost your business's online presence and drive measurable results. Partner with us for customized strategies that enhance your digital growth.";
//   const path = `${pathname}`;
//   const metaImage = "";

//   useEffect(() => {
//     const handleWheelScroll = (event) => {
//       const deltaY = event.deltaY;

//       if (deltaY > 0 && !showSecondSection) {
//         setShowSecondSection(true);
//         setIsScrollLocked(true);
//       }
//     };

//     const handleTouchStart = (event) => {
//       touchStartY.current = event.touches[0].clientY;
//     };

//     const handleTouchMove = (event) => {
//       const touch = event.touches[0];
//       const deltaY = touchStartY.current - touch.clientY;

//       if (deltaY > 0 && !showSecondSection) {
//         setShowSecondSection(true);
//         setIsScrollLocked(true);
//       }
//     };

//     window.addEventListener("wheel", handleWheelScroll, { passive: false });
//     window.addEventListener("touchstart", handleTouchStart, { passive: false });
//     window.addEventListener("touchmove", handleTouchMove, { passive: false });

//     return () => {
//       window.removeEventListener("wheel", handleWheelScroll);
//       window.removeEventListener("touchstart", handleTouchStart);
//       window.removeEventListener("touchmove", handleTouchMove);
//     };
//   }, [showSecondSection]);

//   useEffect(() => {
//     if (secondSectionRef.current) {
//       const handleScroll = () => {
//         secondSectionRef.current.scrollIntoView({ behavior: "smooth" });
//       };

//       window.addEventListener("click", handleScroll);

//       return () => {
//         window.removeEventListener("click", handleScroll);
//       };
//     }
//   }, [secondSectionRef.current]);

//   useEffect(() => {
//     if (isScrollLocked) {
//       const lockScroll = (event) => {
//         event.preventDefault();
//         event.stopPropagation();
//       };
//       window.addEventListener("wheel", lockScroll, { passive: false });
//       window.addEventListener("touchmove", lockScroll, { passive: false });

//       return () => {
//         window.removeEventListener("wheel", lockScroll);
//         window.removeEventListener("touchmove", lockScroll);
//       };
//     }
//   }, [isScrollLocked]);

//   return (
//     <>
//       {/* <SeoComponents
//         title={title}
//         description={description}
//         path={path}
//         metaImage={metaImage}
//       /> */}

//       {/* First Section */}
//       <div
//         className={`iv-bg z-0 ${showSecondSection ? "hidden" : ""} min-h-screen flex flex-col justify-between items-center`}
//       >
//         <div className="flex flex-col justify-center items-center z-10">
//           <Image
//             src="/images/ivista_logo.svg"
//             width={300}
//             height={80}
//             className="img-fluid"
//             alt="IVISTAZ Logo"
//           />
//           <Link href="/welcome" className="demo rounded-md bg-white text-black px-4 py-2">
//             Skip
//           </Link>
//         </div>

//         <div className="flex flex-col justify-center items-center">
//           <h2 className="text-white text-5xl font-bold">WHAT DOES</h2>
//           <div className="animate seven text-white text-6xl font-bold flex gap-1">
//             <span>P</span>
//             <span>E</span>
//             <span>R</span>
//             <span>F</span>
//             <span>O</span>
//             <span>R</span>
//             <span>M</span>
//             <span>A</span>
//             <span>N</span>
//             <span>C</span>
//             <span>E</span>
//           </div>
//           <h2 className="text-white text-5xl font-bold">MEAN TO YOU?</h2>
//         </div>

//         <div
//           className="scroll-down cursor-pointer"
//           onClick={() => setShowSecondSection(true)}
//         ></div>
//       </div>

//       {/* Second Section */}
//       <div
//         className={`iv-bg min-h-screen fixed top-0 left-0 right-0 z-30 p-0 ${showSecondSection ? "block" : "hidden"} overflow-y-auto`}
//         ref={secondSectionRef}
//       >
//         <div className="flex flex-col justify-between items-center min-h-screen">
//           <div className="flex flex-col justify-center items-center p-0">
//             {/* Add your images or content here */}
//           </div>

//           <div className="flex flex-col justify-center items-center p-0">
//             <div className="flex lg:hidden mobile-home-padding mt-20"></div>
//             <h2 className="text-white text-5xl font-bold">WHAT DOES</h2>
//             <div className="animate seven text-white text-6xl font-bold flex gap-1">
//               <span>P</span>
//               <span>E</span>
//               <span>R</span>
//               <span>F</span>
//               <span>O</span>
//               <span>R</span>
//               <span>M</span>
//               <span>A</span>
//               <span>N</span>
//               <span>C</span>
//               <span>E</span>
//             </div>
//             <h2 className="text-white text-5xl font-bold">MEAN TO YOU?</h2>
//           </div>

//           <div className="flex flex-col justify-center items-center animated-content">
//             <div className="flex flex-col lg:flex-row items-center justify-end gap-3 custom-home-row">
//               <div
//                 className="overflow-hidden w-3/4 bg-red-600"
//                 data-aos="fade-up"
//               >
//                 <Link
//                   href="/sales"
//                   className="btn h-btn blurb-ripple-out flex flex-row gap-2 justify-center"
//                 >
//                   <Image
//                     src="/mainpage/online_sale.svg"
//                     alt="Online Sales"
//                     width={30}
//                     height={30}
//                   />
//                   <span>Online Sales</span>
//                 </Link>
//               </div>
//               <div className="overflow-hidden w-3/4">
//                 <Link
//                   href="/leads"
//                   className="btn h-btn blurb-ripple-out flex flex-row gap-2 justify-center"
//                 >
//                   <Image
//                     src="/mainpage/leads.svg"
//                     alt="Leads"
//                     width={30}
//                     height={30}
//                   />
//                   <span>Leads</span>
//                 </Link>
//               </div>
//               <div className="overflow-hidden w-3/4">
//                 <Link
//                   href="/traffic"
//                   className="btn h-btn blurb-ripple-out flex flex-row gap-2 justify-center"
//                 >
//                   <Image
//                     src="/mainpage/traffic.svg"
//                     alt="Traffic"
//                     width={30}
//                     height={30}
//                   />
//                   <span>Traffic</span>
//                 </Link>
//               </div>
//             </div>

//             <div className="flex flex-col lg:flex-row items-center gap-3 pt-3 custom-home-row">
//               <div className="overflow-hidden w-3/4">
//                 <Link
//                   href="/keyword-ranking"
//                   className="btn h1-btn blurb-ripple-out flex flex-row gap-2 justify-center"
//                 >
//                   <Image
//                     src="/mainpage/keyword.svg"
//                     alt="Keyword Ranking"
//                     width={30}
//                     height={30}
//                   />
//                   <span>Keyword Ranking</span>
//                 </Link>
//               </div>
//               <div className="overflow-hidden w-3/4 flex flex-row gap-2 justify-center">
//                 <Link
//                   href="/engagement"
//                   className="btn h1-btn blurb-ripple-out flex flex-row gap-2 justify-center"
//                 >
//                   <Image
//                     src="/mainpage/engagement.svg"
//                     alt="Engagement"
//                     width={30}
//                     height={30}
//                   />
//                   <span>Engagement</span>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HomePage;
