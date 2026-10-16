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
      <p className="body-copy max-w-[940px] mb-20 text-center text-white/80 text-lg leading-[1.8] font-normal px-4">
        I’m a junior front-end developer looking for a new role in an exciting
        company. I focus on writing accessible HTML, using modern CSS practices
        and writing clean JavaScript. When writing JavaScript code, I mostly use
        React, but I can adapt to whatever tools are required. I’m based in
        London, UK, but I’m happy working remotely and have experience in remote
        teams. When I’m not coding, you’ll find me outdoors. I love being out in
        nature whether that’s going for a walk, run or cycling. I’d love you to
        check out my work.
      </p>

      {/* Skills Visual matching the complex design from the image */}
      <div className="w-full max-w-[895px] flex justify-center items-center mt-12 relative">
        {/* Complex skills visual graphic from image_2.png */}
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
