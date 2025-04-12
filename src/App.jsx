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
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";



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
      <Navbar activeSection={activeSection} />

      {/* Sections with IDs */}
      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <AboutMe />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </ParallaxProvider>
  );
}

export default App;
