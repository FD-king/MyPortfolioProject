import Image from "next/image";
import React from "react";

const AboutSectionPage = () => {
  return (
    <section
      id="aboutSection"
      className="relative w-full max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 py-24 md:py-32 flex flex-col items-center text-center"
    >
      {/* Section Title with blue-to-pink gradient from image */}
      <h2 className="text-5xl md:text-[5.5rem] font-bold tracking-tight leading-[1.05] mb-12">
        <span className="bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] bg-clip-text text-transparent">
          About
        </span>
      </h2>

      {/* About Description Paragraph */}
      <p className="body-copy max-w-[940px] mb-6 text-center text-white/80 text-lg leading-[1.8] font-normal px-4">
        I’ve worked with local and international clients, boosting visibility,
        traffic, and conversions across industries. My approach is strategic,
        transparent, and results-focused — perfect for brands that want to
        dominate their niche.
      </p>

      {/* Left-aligned bullet list block */}
      <p className="max-w-[940px] w-full mb-20 text-white/80 text-lg leading-[1.8] font-normal px-4 text-left mx-auto">
        {">"} Craft data-driven SEO strategies (Local & International) <br />
        {">"} Optimize websites for search engines & users <br />
        {">"} Write engaging, SEO-friendly content that gets noticed <br />
        {">"} Analyze trends & leverage AI (LLMs) to stay ahead of Google
        updates.
      </p>

      {/* Skills Visual matching the complex design from the image */}
      <div className="w-full max-w-[895px] flex justify-center items-center mt-12 relative">
        <Image
          src="/skills-orbit.svg"
          alt="Skills and technologies visual"
          width={895}
          height={657}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default AboutSectionPage;
