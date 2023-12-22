// React Imports
import { useEffect } from "react";
// Custom Components
import About from "./About";
import DownArrow from "./DownArrow";
import Hero from "./Hero";
import HeroBar from "./HeroBar";
import HeroImage from "./HeroImage";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

const Home = () => {
  // Smooth Scrolling Effect
  useEffect(() => {
    const handleAnchorClick = (event: MouseEvent) => {
      const anchor = event.target as HTMLAnchorElement;
      if (
        anchor.tagName === "A" &&
        anchor.getAttribute("href")?.startsWith("#")
      ) {
        event.preventDefault();
        const targetId = anchor.getAttribute("href")?.substring(1);
        const targetElement = targetId
          ? document.getElementById(targetId)
          : null;
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <div className="flex flex-col h-screen snap-y snap-mandatory overflow-scroll">
      {/* Hero */}
      <section className="flex min-h-screen snap-center">
        <div className="flex flex-col flex-1">
          <HeroBar />
          <Hero />
          <DownArrow />
        </div>
        {/* nav bar and images */}
        <div className="flex flex-1 flex-col bg-background">
          <Navbar />
          <HeroImage />
        </div>
      </section>
      {/* About */}
      <section
        className="min-h-screen bg-offwhite snap-center flex justify-center"
        id="about"
      >
        <About />
      </section>
      {/* Projects */}
      <section
        className="min-h-screen bg-offwhite snap-center flex justify-center"
        id="projects"
      >
        <Projects />
      </section>
      {/* Skills */}
      <section
        className="min-h-screen bg-offwhite snap-center flex justify-center"
        id="skills"
      >
        <Skills />
      </section>
      {/* Contact */}
      <section
        className="min-h-screen bg-offwhite snap-center flex justify-center"
        id="contact"
      >
        <Contact />
      </section>
    </div>
  );
};

export default Home;
