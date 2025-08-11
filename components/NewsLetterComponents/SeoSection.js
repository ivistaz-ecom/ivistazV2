import React from "react";
import Image from "next/image";

const SeoSection = () => {
  return (
    <>
      <div className="bg-[#FFCF00] py-10">
        <div className="container mx-auto">
          <div>
            <Image
              src="/news-letter/seo.svg"
              alt="seo"
              width={600}
              height={600}
              className="w-full h-auto object-cover p-5 lg:p-0 lg:py-16"
            />
          </div>
          {/* first row */}
          <div className="flex lg:flex-row flex-col items-center justify-center  gap-10">
            <div className="">
              <Image
                src="/news-letter/seo-1.png"
                alt="seo"
                width={600}
                height={600}
                className="w-full h-auto object-cover  lg:px-0 px-4"
              />
            </div>
            <div>
              <p className="text-xl lg:w-[500px] font-monument-light lg:px-0 px-4">
                Life on the SEO team means wearing many hats, detective, wizard,
                cat-herder. We chase wins: one day a keyword’s up, the next an
                algorithm update throws everything into chaos. Google’s
                algorithm is an unpredictable librarian, loving your blog today,
                abandoning it tomorrow for sea shanties!
              </p>
            </div>
          </div>

          {/* second row 2 */}
          <div className="flex lg:flex-row flex-col-reverse items-center justify-center  gap-10 mt-10">
            <div>
              <p className="text-xl lg:w-[500px] font-monument-light lg:-mt-20  lg:px-0 px-4">
                We mix fun and strategy, swapping memes, finding quirky search
                queries, and sneaking in keywords, only to be reset by algorithm
                updates. We quickly adapt and outsmart the changes.
              </p>
            </div>
            <div className="">
              <Image
                src="/news-letter/seo-2.png"
                alt="seo"
                width={600}
                height={600}
                className="w-full h-auto object-cover lg:-mt-16  lg:px-0 px-4"
              />
            </div>
          </div>

          {/* third row 3 */}
          <div className="flex lg:flex-row flex-col items-center justify-center gap-10">
            <div className="">
              <Image
                src="/news-letter/seo-3.png"
                alt="seo"
                width={600}
                height={600}
                className="w-full h-auto object-cover lg:-mt-40 lg:pt-0 pt-7 lg:px-0 px-4"
              />
            </div>
            <div>
              <p className="text-xl lg:w-[500px] font-monument-light  lg:px-0 px-4">
                Life on the SEO team means wearing many hats, detective, wizard,
                cat-herder. We chase wins: one day a keyword’s up, the next an
                algorithm update throws everything into chaos. Google’s
                algorithm is an unpredictable librarian, loving your blog today,
                abandoning it tomorrow for sea shanties!
              </p>
            </div>
          </div>
          {/* fourth row 4 */}
          <div className="flex lg:flex-row flex-col-reverse items-center justify-center lg:gap-10 gap-4 mt-10">
            <div>
              <p className="text-xl lg:w-[500px] font-monument-light lg:-mt-20  lg:px-0 px-4">
                Our team thrives on the madness: 301 redirect jokes, weirdest
                search phrase contests, and heated Friday debates about the art
                of clickbait. The highs, #1 rankings and spiking traffic, make
                every twist worth it. Some days we often spark debates on “Why
                multiple H1 tags on one page?
              </p>
            </div>
            <div className="">
              <Image
                src="/news-letter/seo-4.png"
                alt="seo"
                width={600}
                height={600}
                className="w-full h-auto object-cover lg:-mt-32 lg:px-0 px-4"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-10">
            <p className="text-center text-xl font-monument-bold text-[#E0091C] lg:w-[70%]  lg:px-0 px-4">
              So when Google’s maze leaves you lost, remember your SEO team,
              living for the highs, memes, and the next big ranking leap.
            </p>
            <p className="text-center text-xl font-monument-bold text-[#000] lg:w-[65%] mt-10  lg:px-0 px-4">
              So when Google’s maze leaves you lost, remember your SEO team,
              living for the highs, memes, and the next big ranking leap.
            </p>
            <p className="text-center text-xl font-monument-light text-[#292727] w-[65%] mt-10">
              Susmita
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeoSection;
