import Image from "next/image";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const ProjectsPage = () => {
  return (
    <section className="relative w-full max-w-360 mx-auto px-6 md:px-16 lg:px-24 py-24 md:py-32 flex flex-col items-center">
      {/* Section Header */}
      <div className="text-center mb-24">
        <h2 className="section-title mb-4">Recent Work</h2>
        <p className="body-copy">
          A collection of projects I&apos;ve worked on.
        </p>
      </div>

      {/* Projects Container */}
      <div className="w-full max-w-300 flex flex-col gap-32">
        {/* Project 1: Text Left, Image Right */}
        <div className="relative flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="w-full lg:w-7/12 z-20 flex flex-col items-start">
            <span className="text-xs uppercase tracking-[0.2em] text-[#5DFFFF] font-semibold mb-2">
              Featured Project
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Example Project
            </h3>

            {/* Description Box with /Rectangle_10.png Background (Overlapping Image) */}
            <div className="relative w-full lg:w-[540px] p-8 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/Rectangle_10.1.png"
                alt="Card background"
                fill
                className="object-cover -z-10"
              />
              <p className="text-white/80 text-base leading-relaxed relative z-10">
                A web app for visualizing personalized Spotify data. View your
                top artists, top tracks, recently played tracks, and detailed
                audio information about each track. Create and save new
                playlists of recommended tracks based on your existing playlists
                and more.
              </p>
            </div>

            <div className="flex items-center gap-6 mt-6 text-xl text-white">
              <a
                href="#"
                aria-label="GitHub"
                className="hover:text-[#5DFFFF] transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-[#5DFFFF] transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
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
                  src="/Gemini_Generated_Image_vnf4tdvnf4tdvnf4.png"
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
              Featured Project
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Example Project
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
                A web app for visualizing personalized Spotify data. View your
                top artists, top tracks, recently played tracks, and detailed
                audio information about each track. Create and save new
                playlists of recommended tracks based on your existing playlists
                and more.
              </p>
            </div>

            <div className="flex items-center gap-6 mt-6 text-xl text-white">
              <a
                href="#"
                aria-label="GitHub"
                className="hover:text-[#5DFFFF] transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-[#5DFFFF] transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
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
                  src="/chris-ried-ieic5Tq8YMk-unsplash.png"
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
              Featured Project
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Example Project
            </h3>

            <div className="relative w-full lg:w-135 p-8 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/Rectangle_10.1.png"
                alt="Card background"
                fill
                className="object-cover -z-10"
              />
              <p className="text-white/80 text-base leading-relaxed relative z-10">
                A web app for visualizing personalized Spotify data. View your
                top artists, top tracks, recently played tracks, and detailed
                audio information about each track. Create and save new
                playlists of recommended tracks based on your existing playlists
                and more.
              </p>
            </div>

            <div className="flex items-center gap-6 mt-6 text-xl text-white">
              <a
                href="#"
                aria-label="GitHub"
                className="hover:text-[#5DFFFF] transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-[#5DFFFF] transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-[#5DFFFF] transition-colors"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="w-full lg:w-7/12 lg:-ml-28 mt-8 lg:mt-0 z-0 relative">
            <div className="relative w-full aspect-16/10">
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
                  src="/austin-distel-wD1LRb9OeEo-unsplash.png"
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
              Featured Project
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Example Project
            </h3>

            <div className="relative w-full lg:w-135 p-8 rounded-xl overflow-hidden border border-white/10 shadow-2xl text-left">
              <Image
                src="/Rectangle_10.png"
                alt="Card background"
                fill
                className="object-cover -z-10"
              />
              <p className="text-white/80 text-base leading-relaxed relative z-10">
                A web app for visualizing personalized Spotify data. View your
                top artists, top tracks, recently played tracks, and detailed
                audio information about each track. Create and save new
                playlists of recommended tracks based on your existing playlists
                and more.
              </p>
            </div>

            <div className="flex items-center gap-6 mt-6 text-xl text-white">
              <a
                href="#"
                aria-label="GitHub"
                className="hover:text-[#5DFFFF] transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-[#5DFFFF] transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-[#5DFFFF] transition-colors"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="w-full lg:w-7/12 lg:-mr-28 mt-8 lg:mt-0 z-0 relative">
            <div className="relative w-full aspect-16/10">
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
                  src="/Gemini_Generated_Image_ux1gtlux1gtlux1g.png"
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
