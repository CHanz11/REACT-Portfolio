import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Hero from "./components/Hero";
import Section from "./components/Section";
import CustomCursor from "./components/CustomCursor";
import SmoothScroll from "./components/SmoothScroll";
import Button from "./components/Button";

function App() {
  return (
    <ParallaxProvider>
      <SmoothScroll />
      <CustomCursor />
      <Hero />
        <Section
          title="About Me"
          text="I am a passionate developer with experience in creating dynamic web applications."
          image="images/about-2.jpg"
        />

      <Section
        title="Projects"
        text="Here are some of my featured projects that showcase my skills and creativity."
        image="/images/project-2.jpg"
      >
        <Button text="View More" onClick={() => console.log("View More Clicked!")} />
      </Section>
              

        <Section
          title="Contact"
          text="Let's work together! Reach out to me via email or social media."
          image="images/contact.jpg"
        />
    </ParallaxProvider>
  );
}

export default App;
