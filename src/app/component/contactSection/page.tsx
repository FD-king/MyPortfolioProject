import Image from "next/image";
import ContactForm from "./ContactForm";

const ContactSectionPage = () => {
  return (
    <section className="relative w-full max-w-360 mx-auto px-6 md:px-16 lg:px-24 pt-10 pb-6 md:pt-16 md:pb-8 flex flex-col items-center">
      {/* Centered Section Title */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="section-title">Contact</h2>
      </div>

      {/* Main Content Grid */}
      <div className="w-full max-w-300 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Information Column */}
        <div className="lg:col-span-6 flex flex-col items-start">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-[#5DFFFF]">
            Drop me a message
          </h3>
          <p className="body-copy text-base md:text-lg mb-10 max-w-120">
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track.
          </p>

          <div className="flex flex-col gap-6 text-white/90">
            <a
              href="tel:+880 1XXXXXXXXX"
              className="flex items-center gap-4 hover:text-[#5DFFFF] transition-colors"
            >
              <Image
                src={"/Phone_logo.png"}
                alt="phoneLogo"
                width={35}
                height={35}
              />
              <span className="text-base">+880 1XXXXXXXXX</span>
            </a>

            <a
              href="mailto:mymail@gmail.com"
              target="_blank"
              className="flex items-center gap-4 hover:text-[#5DFFFF] transition-colors"
            >
              <Image
                src={"/Mail_logo.png"}
                alt="phoneLogo"
                width={35}
                height={35}
              />
              <span className="text-base">mail@gmail.com</span>
            </a>

            <a
              href="Location"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:text-[#5DFFFF] transition-colors"
            >
              <Image
                src={"/Location_logo.png"}
                alt="phoneLogo"
                width={35}
                height={35}
              />
              <span className="text-base">Mirpur | Dhaka | Bangladesh</span>
            </a>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-6 w-full">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSectionPage;
