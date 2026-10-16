import React from "react";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

const FooterPage = () => {
  return (
    <footer className="w-full max-w-360 mx-auto px-6 md:px-16 lg:px-24 pt-8.5 pb-10">
      {/* Top Divider Line */}
      <div className="w-full h-px bg-white/10 mb-8" />

      {/* Footer Content */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white/80">
        {/* Copyright Text */}
        <div>
          <p className="text-sm md:text-base font-light tracking-wide">
            2025 - Swapna Begum, All rights reserved
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6 text-xl text-white">
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
            href="https://www.linkedin.com/in/swapna-begum-4b51a8230/"
            aria-label="LinkedIn"
            className="hover:text-[#5DFFFF] transition-colors duration-200"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
