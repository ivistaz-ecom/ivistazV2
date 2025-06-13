"use client";
import React from "react";

const Banner = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        {/* Desktop Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hidden md:block w-full h-full object-cover"
        >
          <source
            src="https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/IvistazWebsite/ai-powered-marketing/tech_solution_banner.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Mobile Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="block md:hidden w-full h-full object-cover"
        >
          <source
            src="https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/IvistazWebsite/ai-powered-marketing/tech_solution_banner_mobile_video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Banner;
