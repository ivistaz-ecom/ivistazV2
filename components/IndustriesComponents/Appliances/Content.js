import Link from "next/link";
import React from "react";

const Content = () => {
  return (
    <>
      <div>
        <div className="container mx-auto">
          <h1 className="text-[40px] text-[#ff0000] uppercase font-monument-bold text-center lg:py-10 pt-5">
            Appliances
          </h1>
          <p className="text-center lg:text-lg font-monument-light lg:p-0 p-5">
            The Indian Appliances and Consumer Electronics industry is expected
            to double to Rs. 1.48 trillion by 2025{" "}
            <Link
              target="_blank"
              className="underline"
              href="https://retail.economictimes.indiatimes.com/news/consumer-durables-and-information-technology/consumer-electronics/indian-appliances-consumer-electronic-industry-to-double-to-rs-1-48-crore-by-2025/95568165"
            >
              according to CEAMA.
            </Link>{" "}
            A recent report{" "}
            <Link
              target="_blank"
              className="underline"
              href="https://yourstory.com/2022/10/indian-online-shoppers-migh-outnumber-us-shoppers-ecommerce"
            >
              by Flipkart and Bain & Co
            </Link>{" "}
            states that the number of online shoppers in India is likely to grow
            to 400 million-450 million by 2027 from 180 million-190 million in
            2021 and appliances (along with mobiles and electronics) will have
            among the highest market shares at 25-30%.
          </p>
          <div className="flex justify-center flex-col items-center lg:p-0 p-5">
            <p className="lg:py-10 lg:text-2xl text-center font-monument-bold lg:w-[90%]">
              The size of customers doing research online and buying offline is
              rapidly shrinking. More and more buyers are now comfortable buying
              even large appliances online. Undoubtedly, you would be looking to
              capitalize on this opportunity.
            </p>
            <p className="lg:text-2xl text-center font-monument-bold lg:w-[90%] pt-5 lg:pt-0 pb-0 lg:pb-10">
              Our carefully tailored digital marketing strategies will help to
              increase online sales for appliances brands, boosting visibility
              and engagement both on your brand e-store as well as on
              marketplaces. With our expertise in digital marketing for the
              appliances industry, we ensure your brand stands out in a
              competitive market.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
