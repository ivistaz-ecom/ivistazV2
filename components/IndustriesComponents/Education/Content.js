import React from "react";

const Content = () => {
  return (
    <>
      <div>
        <div className="container mx-auto">
          <h1 className="text-[40px] text-[#ff0000] uppercase font-monument-bold text-center lg:py-10 pt-5">
            Education
          </h1>

          <p className="text-center lg:text-2xl font-monument-bold lg:px-0 px-5 lg:pt-0 pt-5">
            Students search online before they choose where to study.
          </p>
          <div className="flex justify-center flex-col items-center lg:p-0 p-5">
            <p className="lg:py-10  lg:text-lg text-center font-monument-light lg:w-[90%]">
              From search engines to review platforms, students and parents
              explore options digitally before making enrollment decisions.
              Institutions that show up early and communicate clearly have an
              edge. At iVistaz, we help educational institutions connect with
              the right learners using mobile-first websites, clear messaging,
              and performance-driven campaigns.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
