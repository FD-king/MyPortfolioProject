import Image from "next/image";
import React from "react";

const HeroSectionPage = () => {
  return (
    <section
      id="heroSection"
      className="relative w-full px-4 sm:px-6 md:px-10 pt-2 pb-12 flex justify-center"
    >
      {/* Main Glass Shell Container */}
      <div className="relative w-full max-w-[1400px] min-h-[620px] md:min-h-[680px] rounded-[25px] rounded-b-none border border-white/20 overflow-hidden shadow-2xl flex flex-col justify-between">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Rectangle_4.png"
            alt="Hero Background"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-end min-h-[560px] lg:min-h-[620px] px-8 sm:px-12 md:px-16 pt-12 md:pt-16 pb-0">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start pb-12 md:pb-16 max-w-[620px]">
            <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-white tracking-tight leading-[1.05] pb-15">
              Hi, I’m Swapna.
            </h1>

            <h2 className="text-[clamp(1.5rem,3vw,2.75rem)] font-semibold leading-tight pb-12 bg-gradient-to-r from-[#5DFFFF] via-[#9E65E1] to-[#AE0CA7] bg-clip-text text-transparent">
              SEO optimization specialist.
            </h2>

            <p className="text-white/80 text-base sm:text-lg leading-[1.65] font-normal mb-8 max-w-[560px]">
              I’m a dedicated SEO Expert, Consultant, and Content Writer with 4+
              years of experience helping businesses grow online. I specialize
              in GEO-targeted SEO strategies, LLM optimization, and
              high-performing content that ranks, converts, and drives real
              results.
            </p>

            <a href="#contactSection" className="pt-10 inline-block">
              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#5DFFFF] via-[#A832C6] to-[#AE0CA7] text-white font-medium text-base shadow-lg hover:opacity-95 transition-all duration-200 cursor-pointer active:scale-95">
                Contact
              </button>
            </a>
          </div>
          {/* Profile Image with exact dimensions and bottom-flush alignment matching Figma */}
          <div className="col-span-1 lg:col-span-5 flex justify-center items-end mt-6 lg:mt-0 w-full self-end">
            <Image
              src="/mami_profile_pic-removebg-preview.png"
              alt="Anurag"
              width={1000}
              height={667}
              priority
              className="w-full max-w-none h-auto object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionPage;
