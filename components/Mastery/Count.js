import React from "react";
import CountUp from "react-countup";

const Count = () => {
  return (
    <div>
      {/* Counter Section */}
      <div className="grid lg:grid-cols-4 gap-4 text-center justify-between mt-10">
        {[
          {
            value: 28,
            label: "Years of Experience & Expertise",
          },
          {
            value: 800,
            suffix: "+",
            label: (
              <>
                Clients <br />
                Served
              </>
            ),
          },
          {
            value: 6,
            prefix: "$",
            suffix: "B",
            label: (
              <>
                Online Revenue
                <br /> Generated
              </>
            ),
          },
          {
            value: 500,
            suffix: "+",
            label: "Websites Designed and Developed",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-start text-white text-center"
          >
            <CountUp
              end={item.value}
              prefix={item.prefix || ""}
              suffix={item.suffix || ""}
              className="text-[80px] font-monument-bold font-bold"
            />
            <h4 className="text-[24px] mt-4 min-h-[72px] flex items-center justify-center text-center">
              {item.label}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Count;
