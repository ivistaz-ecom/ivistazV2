"use client";

import { useEffect, useState } from "react";

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
    prefix: "$", // ✅ Add dollar prefix
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

const CountUp = ({ end, suffix, prefix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const stepTime = Math.abs(Math.floor(duration / end));
    const interval = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(interval);
    }, stepTime);
    return () => clearInterval(interval);
  }, [end]);

  return (
    <span className="text-white lg:text-7xl text-2xl font-semibold">
      {prefix || ""}
      {count}
      {suffix}
    </span>
  );
};

const Count = () => {
  return (
    <section className="bg-black lg:py-16 lg:px-6 p-5">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, idx) => (
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
              <CountUp
                end={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
              />
            </div>
            <p className="text-lg text-white/80 leading-snug">{stat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Count;
