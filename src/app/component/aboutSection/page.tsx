import Image from "next/image";
import React from "react";

const AboutSectionPage = () => {
  return (
    <section className="relative w-full max-w-360 mx-auto px-6 md:px-16 lg:px-24 py-24 md:py-32 flex flex-col items-center text-center">
      {/* Section Title matching Figma specification */}
      <h2 className="section-title mb-8">About</h2>

      {/* About Description Paragraph */}
      <p className="body-copy max-w-250 mb-16 text-center">
        I’m a junior front-end developer looking for a new role in an exciting
        company. I focus on writing accessible HTML, using modern CSS practices
        and writing clean JavaScript. When writing JavaScript code, I mostly use
        React, but I can adapt to whatever tools are required. I’m based in
        London, UK, but I’m happy working remotely and have experience in remote
        teams. When I’m not coding, you’ll find me outdoors. I love being out in
        nature whether that’s going for a walk, run or cycling. I’d love you to
        check out my work.
      </p>

      {/* Skills / Visual Asset Container */}
      <div className="w-full max-w-223.75 flex justify-center items-center mt-4">
        <div className="relative w-full aspect-895/657">
          <Image
            src="/skills-orbit.svg"
            alt="About me"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSectionPage;
