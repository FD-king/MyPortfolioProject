import Image from "next/image";
import ContactForm from "./ContactForm";

const ContactSectionPage = () => {
  return (
    <section
      id="contactSection"
      className="relative w-full max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 pt-10 pb-6 md:pt-16 md:pb-8 flex flex-col items-center"
    >
      {/* Centered Section Title */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="section-title mb-4 bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] bg-clip-text text-transparent text-5xl md:text-[5.5rem] font-semibold tracking-tight leading-[1.05]">
          Contact
        </h2>
      </div>

      {/* Main Content Grid */}
      <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Information Column */}
        <div className="lg:col-span-6 flex flex-col items-start">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-[#5DFFFF]">
            Drop me a message
          </h3>
          <p className="body-copy text-base md:text-lg mb-10 max-w-[480px]">
            Let’s Connect! If you’re ready to take your business to the next
            level with expert SEO and content marketing, I’d love to
            collaborate.
          </p>

          <div className="flex flex-col gap-6 text-white/90">
            <a
              href="tel:+880 1333-798690"
              className="flex items-center gap-4 hover:text-[#5DFFFF] transition-colors"
            >
              <Image
                src={"/Phone_logo.png"}
                alt="phoneLogo"
                width={35}
                height={35}
              />
              <span className="text-base">+880 1333-798690</span>
            </a>

            <a
              href="mailto:swapnaseoexpert@gmail.com"
              target="_blank"
              className="flex items-center gap-4 hover:text-[#5DFFFF] transition-colors"
            >
              <Image
                src={"/Mail_logo.png"}
                alt="mailLogo"
                width={35}
                height={35}
              />
              <span className="text-base">swapnaseoexpert@gmail.com</span>
            </a>

            <div className="flex items-center gap-4 text-white/90">
              <Image
                src={"/Location_logo.png"}
                alt="locationLogo"
                width={35}
                height={35}
              />
              <span className="text-base">Mirpur | Dhaka | Bangladesh</span>
            </div>
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
