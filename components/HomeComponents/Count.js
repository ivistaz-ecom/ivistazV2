"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 29,
    suffix: "+",
    title: (
      <>
        Years of Experience <br className="hidden sm:block" /> & Expertise
      </>
    ),
    gradient: "from-[#8e0037] to-[#ff477e]",
  },
  {
    value: 800,
    suffix: "+",
    title: <>Clients Served</>,
    gradient: "from-[#3f0071] to-[#9e40ef]",
  },
  {
    value: 6,
    prefix: "$",
    suffix: "B",
    title: (
      <>
        Online Revenue <br className="hidden sm:block" /> Generated
      </>
    ),
    gradient: "from-[#00664f] to-[#00d8a2]",
  },
  {
    value: 500,
    suffix: "+",
    title: (
      <>
        Websites Designed <br className="hidden sm:block" /> And Developed
      </>
    ),
    gradient: "from-[#cc4a00] to-[#ff512f]",
  },
];

const CountUpGroup = ({ start }) => {
  const duration = 1500; // 1.5 seconds total
  const steps = 60; // Number of updates
  const intervalTime = duration / steps;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!start) return;

    let step = 0;
    const interval = setInterval(() => {
      step++;
      setProgress(step / steps);
      if (step === steps) clearInterval(interval);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [start]);

  return (
    <>
      {stats.map((stat, idx) => {
        const current = Math.round(stat.value * progress);
        return (
          <div key={idx} className="flex flex-col items-center">
            <div
              className="pb-2 border-b-4 w-full max-w-[250px] mb-4"
              style={{
                borderImage: `linear-gradient(to right, ${stat.gradient
                  .replace("from-[", "")
                  .replace("]", "")
                  .replace(" to-[", ", ")
                  .replace("]", "")}) 1`,
                borderImageSlice: 1,
                borderBottom: "4px solid",
                borderImageRepeat: "stretch",
                borderImageOutset: 0,
              }}
            >
              <span className="text-white lg:text-7xl text-2xl font-semibold">
                {stat.prefix || ""}
                {progress < 1 ? current : stat.value}
                {stat.suffix}
              </span>
            </div>
            <p className="text-lg text-white/80 leading-snug">{stat.title}</p>
          </div>
        );
      })}
    </>
  );
};

const Count = () => {
  const sectionRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect(); // run only once
        }
      },
      {
        threshold: 0.4,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black lg:py-16 lg:px-6 p-5"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <CountUpGroup start={start} />
      </div>
    </section>
  );
};

export default Count;
