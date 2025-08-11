import Image from "next/image";
import React from "react";

const Grie = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div>
          <Image
            src="/news-letter/grie.svg"
            alt="grie"
            width={400}
            height={400}
            className="object-cover lg:px-0 px-4"
          />
        </div>
        <div className="flex flex-col items-center justify-center lg:py-10 py-5">
          <p className="text-center lg:w-[75%] font-monument-light text-lg lg:px-0 px-4">
            We’ve been wanting a team outing for so long that at this point, any
            memory of the last outing has started to fade away/has started to
            sound like folklore. It’s time to give the employees a chance to
            show their true and drunk selves.
          </p>
          <p className="text-center lg:w-[75%] font-monument-light text-md font-monument-light-italic text-[#092F87] py-5">
            This grievance is brought to you by Team iVistaz (especially the
            newer employees who have heard about Goa too many times).
          </p>
        </div>
      </div>
    </>
  );
};

export default Grie;
