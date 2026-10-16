import Image from "next/image";
import React from "react";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

const ProjectsPage = () => {
  return (
    <section
      id="projectsSection"
      className="relative w-full max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 py-24 md:py-32 flex flex-col items-center"
    >
      {/* Section Header */}
      <div className="text-center mb-24">
        <h2 className="section-title mb-4 bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] bg-clip-text text-transparent text-5xl md:text-[5.5rem] font-semibold tracking-tight leading-[1.05]">
          Recent Work
        </h2>
        <p className="body-copy">
          A collection of projects I&apos;ve worked on.
        </p>
      </div>

      {/* Projects Container */}
      <div className="w-full max-w-[1200px] flex flex-col gap-32">
        {/* Project 1: Text Left, Image Right */}
        <div className="relative flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="w-full lg:w-7/12 z-20 flex flex-col items-start">
            <span className="text-xs uppercase tracking-[0.2em] text-[#5DFFFF] font-semibold mb-2">
              SEO
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Google Search Console Work
            </h3>

            {/* Description Box with /Rectangle_10.1.png Background (Overlapping Image) */}
            <div className="relative w-full lg:w-[540px] p-8 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/Rectangle_10.1.png"
                alt="Card background"
                fill
                className="object-cover -z-10"
              />
              <p className="text-white/80 text-base leading-relaxed relative z-10">
                ✅Why Use the Google Search Console (GSC)? <br /> <br />
                Google Search Console helps you improve search ranking for most
                of your websites. It is also a useful tool for expanding your
                websites, as it provides the keywords used by real users in
                search engines. This helps in identifying content that your
                website may have missed, thus improving overall content
                availability.
              </p>
            </div>

            <div className="flex items-center gap-6 mt-6 text-xl text-white">
              <a
                href="https://www.facebook.com/begumswapnasayma"
                aria-label="Facebook"
                className="hover:text-[#5DFFFF] transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href="https://x.com/swapnabegum_"
                target="_blank"
                aria-label="Twitter"
                className="hover:text-[#5DFFFF] transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7144544296652709888/"
                aria-label="LinkedIn"
                className="hover:text-[#5DFFFF] transition-colors"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Right Image Container with /Group_1940.png offset to Top-Left so bottom-right is covered */}
          <div className="w-full lg:w-7/12 lg:-ml-28 mt-8 lg:mt-0 z-0 relative">
            <div className="relative w-full aspect-[16/10]">
              {/* Background frame asset */}
              <div className="absolute top-0 left-0 w-[95%] h-[92%] rounded-2xl overflow-hidden border border-white/10 shadow-xl -z-10">
                <Image
                  src="/Group_1940.png"
                  alt="Image frame background"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Main project screenshot extending over bottom-right corner */}
              <div className="absolute bottom-0 right-0 w-[96%] h-[94%] rounded-xl overflow-hidden border border-white/15 shadow-2xl">
                <Image
                  src="/1703392098016.jpg"
                  alt="Featured Project"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Project 2: Image Left, Text Right */}
        <div className="relative flex flex-col lg:flex-row-reverse items-center">
          {/* Right Content */}
          <div className="w-full lg:w-7/12 z-20 flex flex-col items-start lg:items-end text-left lg:text-right">
            <span className="text-xs uppercase tracking-[0.2em] text-[#5DFFFF] font-semibold mb-2">
              Content Writing
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              start to finish
            </h3>

            {/* Description Box with /Rectangle_10.png Background */}
            <div className="relative w-full lg:w-[540px] p-8 rounded-xl overflow-hidden border border-white/10 shadow-2xl text-left">
              <Image
                src="/Rectangle_10.png"
                alt="Card background"
                fill
                className="object-cover -z-10"
              />
              <p className="text-white/80 text-base leading-relaxed relative z-10">
                How I Go From Blank Page to Finished Post. <br /> <br />
                Some days I stare at a blank page for 10 minutes… Other days, I
                write like a storm, make mistakes, rewrite, drink too much tea.
                But step by step, the post gets done. <br /> <br />
                So, writers, what part of writing is hardest for you?
              </p>
            </div>

            <div className="flex items-center gap-6 mt-6 text-xl text-white">
              <a
                href="https://www.facebook.com/begumswapnasayma"
                aria-label="Facebook"
                className="hover:text-[#5DFFFF] transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href="https://x.com/swapnabegum_"
                target="_blank"
                aria-label="Twitter"
                className="hover:text-[#5DFFFF] transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7386989725968027648/"
                aria-label="LinkedIn"
                className="hover:text-[#5DFFFF] transition-colors"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Left Image Container */}
          <div className="w-full lg:w-7/12 lg:-mr-28 mt-8 lg:mt-0 z-0 relative">
            <div className="relative w-full aspect-[16/10]">
              {/* Background frame asset */}
              <div className="absolute top-0 right-0 w-[95%] h-[92%] rounded-2xl overflow-hidden border border-white/10 shadow-xl -z-10">
                <Image
                  src="/Group_1940.png"
                  alt="Image frame background"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Main project screenshot extending over bottom-left corner */}
              <div className="absolute bottom-0 left-0 w-[96%] h-[94%] rounded-xl overflow-hidden border border-white/15 shadow-2xl">
                <Image
                  src="/projectImage2.jpg"
                  alt="Featured Project"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Project 3: Text Left, Image Right */}
        <div className="relative flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-7/12 z-20 flex flex-col items-start">
            <span className="text-xs uppercase tracking-[0.2em] text-[#5DFFFF] font-semibold mb-2">
              SEO
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              SEO Keyword Research
            </h3>

            <div className="relative w-full lg:w-[540px] p-8 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/Rectangle_10.1.png"
                alt="Card background"
                fill
                className="object-cover -z-10"
              />
              <p className="text-white/80 text-base leading-relaxed relative z-10">
                This is a keyword research sheet for my client of his Outdoor
                Homedecore Niche. He asked me for the best SEO keywords for
                Google ranking.
              </p>
            </div>

            <div className="flex items-center gap-6 mt-6 text-xl text-white">
              <a
                href="https://www.facebook.com/begumswapnasayma"
                aria-label="Facebook"
                className="hover:text-[#5DFFFF] transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href="https://x.com/swapnabegum_"
                target="_blank"
                aria-label="Twitter"
                className="hover:text-[#5DFFFF] transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/in/swapna-begum-4b51a8230/overlay/1635554774451/single-media-viewer/?profileId=ACoAADmxbskBC_r9mK8HP1vQ0TWrgY2vlMkzbEg"
                aria-label="LinkedIn"
                className="hover:text-[#5DFFFF] transition-colors"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="w-full lg:w-7/12 lg:-ml-28 mt-8 lg:mt-0 z-0 relative">
            <div className="relative w-full aspect-[16/10]">
              <div className="absolute top-0 left-0 w-[95%] h-[92%] rounded-2xl overflow-hidden border border-white/10 shadow-xl -z-10">
                <Image
                  src="/Group_1940.png"
                  alt="Image frame background"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute bottom-0 right-0 w-[96%] h-[94%] rounded-xl overflow-hidden border border-white/15 shadow-2xl">
                <Image
                  src="/1703393239156.png"
                  alt="Featured Project"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Project 4: Image Left, Text Right */}
        <div className="relative flex flex-col lg:flex-row-reverse items-center">
          <div className="w-full lg:w-7/12 z-20 flex flex-col items-start lg:items-end text-left lg:text-right">
            <span className="text-xs uppercase tracking-[0.2em] text-[#5DFFFF] font-semibold mb-2">
              website audit
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Website Audit Report and <br /> Work Plan
            </h3>

            <div className="relative w-full lg:w-[540px] p-8 rounded-xl overflow-hidden border border-white/10 shadow-2xl text-left">
              <Image
                src="/Rectangle_10.png"
                alt="Card background"
                fill
                className="object-cover -z-10"
              />
              <p className="text-white/80 text-base leading-relaxed relative z-10">
                A (Website Audit Report and Work Plan) is important for several
                reasons before starting any website-related work, whether its
                redesigning, optimizing, or launching a new online platform.
                Website Audit Report serves as a foundational step in any
                website-related project. It provides valuable insights, sets
                clear objectives, and ensures that resources are utilized
                effectively to achieve the desired outcomes.
              </p>
            </div>

            <div className="flex items-center gap-6 mt-6 text-xl text-white">
              <a
                href="https://www.facebook.com/begumswapnasayma"
                aria-label="Facebook"
                className="hover:text-[#5DFFFF] transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href="https://x.com/swapnabegum_"
                target="_blank"
                aria-label="Twitter"
                className="hover:text-[#5DFFFF] transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/in/swapna-begum-4b51a8230/overlay/1635554773862/single-media-viewer/?profileId=ACoAADmxbskBC_r9mK8HP1vQ0TWrgY2vlMkzbEg"
                aria-label="LinkedIn"
                className="hover:text-[#5DFFFF] transition-colors"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="w-full lg:w-7/12 lg:-mr-28 mt-8 lg:mt-0 z-0 relative">
            <div className="relative w-full aspect-[16/10]">
              <div className="absolute top-0 right-0 w-[95%] h-[92%] rounded-2xl overflow-hidden border border-white/10 shadow-xl -z-10">
                <Image
                  src="/Group_1940.png"
                  alt="Image frame background"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute bottom-0 left-0 w-[96%] h-[94%] rounded-xl overflow-hidden border border-white/15 shadow-2xl">
                <Image
                  src="/1703395454601.png"
                  alt="Featured Project"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
