import Link from "next/link";

const NavBarPage = () => {
  return (
    <header className="w-full pt-10 pb-6 px-6 md:px-16 lg:px-24">
      <nav className="max-w-300 mx-auto flex items-center justify-between uppercase tracking-widest text-sm font-medium">
        <ul className="flex items-center gap-8 md:gap-16">
          <li>
            <Link
              href="#heroSection"
              className="hover:text-[#5DFFFF] transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#aboutSection"
              className="hover:text-[#5DFFFF] transition-colors duration-200"
            >
              About
            </Link>
          </li>
        </ul>

        <ul className="flex items-center gap-8 md:gap-16">
          <li>
            <Link
              href="#projectsSection"
              className="hover:text-[#5DFFFF] transition-colors duration-200"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#contactSection"
              className="hover:text-[#5DFFFF] transition-colors duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBarPage;
