import React, { useState, useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { Link } from "react-scroll"; // Import Link for smooth scrolling
import Hero from "./components/Hero";
import Section from "./components/Section";
import CustomCursor from "./components/CustomCursor";
import SmoothScroll from "./components/SmoothScroll";
import Button from "./components/Button";
import "./App.css";
import AboutMe from "./components/AboutMe";



function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // When 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <ParallaxProvider>
      <SmoothScroll />
      <CustomCursor />

      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li>
            <Link to="hero" smooth={true} duration={500} className={activeSection === "hero" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} className={activeSection === "about" ? "active" : ""}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} className={activeSection === "projects" ? "active" : ""}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} className={activeSection === "contact" ? "active" : ""}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Sections with IDs */}
      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <AboutMe />
      </section>

      <section id="projects">
        <Section
          title="Projects"
          text="Here are some of my featured projects that showcase my skills and creativity."
          image="/images/project-2.jpg"
        >
          <Button text="View More" onClick={() => console.log("View More Clicked!")} />
        </Section>
      </section>

      <section id="contact">
        <Section
          title="Contact"
          text="Let's work together! Reach out to me via email or social media."
          image="images/contact.jpg"
        />
      </section>
    </ParallaxProvider>
  );
}

export default App;
