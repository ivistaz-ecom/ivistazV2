import React from "react";
import CaseStudiesCategoriesComponents from "../../IndustriesComponents/CaseStudiesPropsFetch/CaseStudiesCategoriesComponents";
import Link from "next/link";

const CaseStudiesCard = () => {
  const categoryId = 17;
  return (
    <>
      <div>
        <div className="container mx-auto flex flex-col items-center justify-center">
          <h3 className="lg:text-[32px] text-xl text-center lg:py-10 lg:p-0 p-5">
            Smarter Lead Generation + Scalable Digital Execution for Tech
            Companies
          </h3>
          <Link href="/b2b-lead-generation-for-tech" className="border iv-bg text-white p-3 rounded-lg mb-5 lg:mb-10 text-2xl">
            Explore More
          </Link>
          <h3 className="lg:text-[22px] text-xl text-center lg:pt-12 lg:pb-0 pb-5 pt-5">
            Here are some instances where our expertise and cutting-edge
            solutions have propelled Tech/IT companies to success
          </h3>
          <div>
            <CaseStudiesCategoriesComponents categoryId={categoryId} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesCard;
