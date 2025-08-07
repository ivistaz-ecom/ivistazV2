import React from "react";
import CaseStudiesCategoriesComponents from "../CaseStudiesPropsFetch/CaseStudiesCategoriesComponents";

const CaseStudiesCard = () => {
  const categoryId = 38;
  return (
    <>
      <div>
        <div className="container mx-auto flex flex-col items-center justify-center">
        <h3 className="lg:text-[22px] text-center lg:w-3xl lg:pt-10 lg:p-0 p-5">
            Here’s how we’ve supported law firms in building a stronger digital
            presence
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
