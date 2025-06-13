"use client";
import React from "react";

const ItAndTechFirms = () => {
  return (
    <div className="relative bg-white z-[1]">
      {/* Text Section */}
      <div className="text-center">
        {/* Desktop Text */}
        <p className="font-monument-bold text-lg lg:text-[32px] leading-[1.5] lg:px-20 px-4 lg:py-20 py-10">
          Mid-sized IT and tech firms face a defining challenge: driving
          sustainable growth while navigating constant technological disruption
          and rising competitive pressures. The playbook of the past—demand
          generation through traditional content, events, and outbound
          efforts—is no longer enough. With the rise of Generative AI, marketing
          must transition from informing prospects to shaping decisions in
          real-time.
        </p>
      </div>

      {/* Video Section */}
      <div className="relative w-full">
        {/* Desktop Video */}
        <div className="hidden md:block aspect-video">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/IvistazWebsite/ai-powered-marketing/ivistaz_comes_in_desktop_video.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Mobile Video */}
        <div className="block md:hidden h-[90vh] w-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/IvistazWebsite/ai-powered-marketing/ivistaz_comes_in_mobile_video.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default ItAndTechFirms;
