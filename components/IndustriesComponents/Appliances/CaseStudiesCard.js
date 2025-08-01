import React from "react";
import CaseStudiesCategoriesComponents from "../../IndustriesComponents/CaseStudiesPropsFetch/CaseStudiesCategoriesComponents";
import Link from "next/link";

const CaseStudiesCard = () => {
  const categoryId = 11;
  return (
    <>
      <div>
        <div className="container mx-auto flex flex-col items-center justify-center">
          <h3 className="lg:text-[32px] text-xl text-center lg:py-10 lg:p-0 p-5 ">
            Performance Marketing for E-commerce Brands That want to Scale
            Smarter
          </h3>
          <Link
            href="/performance-marketing-for-ecommerce"
            className="border iv-bg text-white p-3 rounded-lg mb-5 lg:mb-10 text-2xl w-52 text-center"
          >
            Explore More
          </Link>
          <h3 className="lg:text-[32px] text-center lg:w-3xl lg:py-10 lg:p-0 p-5">
            Here’s how we have helped appliance brands to win in the e-commerce
            channel
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
