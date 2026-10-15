import Image from "next/image";
import React from "react";

const HeroSectionPage = () => {
  return (
    <section className="relative w-full px-4 sm:px-6 md:px-10 pt-4 pb-12 flex justify-center">
      {/* Main Glass Shell Container */}
      <div className="relative w-full max-w-348.75 min-h-170 md:min-h-187.5 rounded-[25px] rounded-b-none border border-white/20 overflow-hidden shadow-2xl flex flex-col justify-between">
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
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-end min-h-150 lg:min-h-170 px-8 sm:px-12 md:px-16 pt-24 md:pt-32 pb-0">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start pb-12 md:pb-20 max-w-155">
            <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-bold text-white tracking-tight leading-[1.05] mb-3">
              Hi, I’m Anurag
            </h1>

            <h2 className="text-[clamp(1.75rem,3.5vw,3.25rem)] font-semibold leading-tight mb-6 bg-linear-to-r from-[#5DFFFF] via-[#9E65E1] to-[#AE0CA7] bg-clip-text text-transparent">
              Front-End Developer.
            </h2>

            <p className="text-white/80 text-base sm:text-lg leading-[1.65] font-normal mb-8 max-w-140">
              A self-taught front-end developer with over 2 months of
              experience, I build responsive and user-friendly websites & app. I
              focus on clean code and efficient design, ensuring seamless
              interactions that align with both user expectations and business
              objectives.
            </p>

            <a href="#contactSection">
              <button className="px-8 py-3 rounded-full bg-linear-to-r from-[#5DFFFF] via-[#A832C6] to-[#AE0CA7] text-white font-medium text-base shadow-lg hover:opacity-95 transition-all duration-200 cursor-pointer active:scale-95">
                Contact
              </button>
            </a>
          </div>
          {/* Profile Image with exact dimensions and bottom-flush alignment matching Figma */}
          <div className="col-span-1 lg:col-span-5 flex justify-center items-end mt-6 lg:mt-0 w-full self-end">
            <Image
              src="/christian-buehner-DItYlc26zVI-unsplash-removebg-preview 1.png"
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
