import Image from "next/image";
import React from "react";

const SpecialSection = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#FFCF00]">
      <h1 className="lg:text-6xl text-4xl myriad-pro-semibold text-[#EC4415] lg:py-10 py-5 text-center">
        Special Section
      </h1>
      <div className="flex flex-col lg:gap-10 gap-5 text-center lg:w-[90%] lg:px-0 px-4">
        <p className="lg:text-2xl myriad-pro-semibold">
          I’m definitely not great at writing, but when I was asked to put
          something together for the newsletter, I won’t lie—I got excited. I
          started thinking about all possible topics, even drafted a few with
          the help of ChatGPT. That’s when I realized how dependent I’ve become
          on AI. So this time, I wanted to write something without using it. And
          here it is.
        </p>
        <p className="lg:text-2xl myriad-pro-semibold">
          The workplace gets a hundred times better because of the people you
          work with. There’s something about everyone in the office that makes
          this place warm and comfortable. I actually look forward to coming
          back to work—and that feeling is rare. You know when people say
          “healthy working space”? Turns out it actually exists. Hard to
          believe, I know.
        </p>
        <p className="lg:text-2xl myriad-pro-semibold">
          From Sanjana, who loves new experiences and whose excitement to learn
          is infectious. To Dikshith. quiet, but not really, who can talk
          endlessly, especially over peri-peri French fries. Kevin, with his fun
          facts and quirky choice of socks. Sanjiban with his amazing ability
          to spot food anywhere in the office. Saarika, bringing golden
          retriever energy (with just the right touch of sarcasm). Shreya, whose
          witty one-liners make you wonder where she’s been hiding all that
          badassness. Aathreya, our unasked-for encyclopedia and his spot-on
          imitations of his Aniketh, whom we have never met.
        </p>
        <p className="lg:text-2xl myriad-pro-semibold">
          Then there’s Keerthi, with his cute doodles, cheesy pick-up lines, and
          pranks that (mostly) flop. Balu, whose presence you somehow notice
          everywhere. Keerthan, who adds a fun, light touch to everything he
          does. Arun sir, whose cheerful “Good morning” in the morning meetings
          sets the tone for the day. Susmitha, with her perfect chai-making
          skills and baked biscuits (which, by the way, I’m still waiting for
          the next batch). Bhavan, who is patiently teaching me Tamil. Sibi, a
          Kamal Haasan fan who somehow always responds when called “Raj.” And of
          course, Azra ma’am and Narayan, with their fun little quarrels that
          always keep us entertained.
        </p>
        <p className="lg:text-2xl myriad-pro-semibold">
          One thing is for sure: no matter our differences, at iVistaz we all
          share a love for gossip and food. As the “adopted baby” of the team, I
          feel happy and grateful to be part of this chaotic, fun, creative
          space that makes me look forward to work every day.
        </p>
        <p className="lg:text-6xl text-4xl myriad-pro-bold text-[#092F87]">Architha</p>
      </div>
      <div className="w-full">
        <Image
          src="/sept-newsletter/special.svg"
          alt="special-section"
          width={1200}
          height={1000}
          className="object-cover lg:px-0 px-4 w-full lg:pt-10 pt-5"
        />
      </div>
    </div>
  );
};

export default SpecialSection;
