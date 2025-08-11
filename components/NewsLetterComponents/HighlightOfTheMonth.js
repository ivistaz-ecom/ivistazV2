import Image from "next/image";
import React from "react";

const HighlightOfTheMonth = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Curved Red Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] md:w-[110%] lg:h-[800px] h-[650px] bg-red-600 rounded-t-full"></div>

      <div className="relative z-10 container mx-auto text-center">
        {/* Laptop Image */}
        <div className="flex justify-center">
          <Image
            src="/news-letter/laptop.png" // Place your laptop image in public folder
            alt="iVistaz Laptop"
            width={1000}
            height={1000}
            className="lg:w-2/3 w-[70%] object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex justify-center">
          <Image
            src="/news-letter/high-new.svg"
            alt="highlight"
            width={800}
            height={800}
            className="p-10 object-cover"
          />
        </div>

        <div className="flex justify-center">
          <Image
            src="/news-letter/spoiler.svg"
            alt="highlight"
            width={500}
            height={500}
            className="lg:px-0 px-4 object-cover"
          />
        </div>

        <div className="flex flex-col items-center justify-center lg:w-[80%] container mx-auto">
          <p className="text-white/90 mt-6 text-sm md:text-lg leading-relaxed font-monument-light py-5 lg:px-0 px-4">
            After 29 years of building brands for everyone else, we finally did
            something new… we worked on our own. That’s right, iVistaz now has
            official brand guidelines. We’ve added more color (literally) and
            made sure the iVistaz look is finally as cool as we pretend to be.
          </p>

          <p className="text-white/90 mt-4 text-sm md:text-lg leading-relaxed pb-10 lg:px-0 px-4">
            The document will be shared soon, so take a look, form opinions, and
            if you’ve got questions (or want a walkthrough), our designers are
            more than happy to chat. More so if you bring them snacks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HighlightOfTheMonth;
