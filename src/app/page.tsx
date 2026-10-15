import NavBarPage from "./component/navBar/page";
import HeroSectionPage from "./component/heroSection/page";
import AboutSectionPage from "./component/aboutSection/page";
import ProjectsPage from "./component/projects/page";
import ContactSectionPage from "./component/contactSection/page";
import FooterPage from "./component/footer/page";

export default function HomePage() {
  return (
    <div>
      <NavBarPage />
      <main>
        <section id="heroSection">
          <HeroSectionPage />
        </section>
        <section id="aboutSection">
          <AboutSectionPage />
        </section>
        <section id="projectsSection">
          <ProjectsPage />
        </section>
        <section id="contactSection">
          <ContactSectionPage />
        </section>
        <section id="footerSection">
          <FooterPage />
        </section>
      </main>
    </div>
  );
}
