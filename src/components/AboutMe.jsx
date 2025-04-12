import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import styled from "styled-components";
import { useRef, useEffect } from "react";

const AboutContainer = styled(motion.section)`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 80px 10%;
  text-align: center;
  overflow: hidden;
  background: ${({ bg }) => bg || "rgba(30, 30, 30, 0.8)"};
`;


const ParallaxImage = styled(Parallax)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: -1;
  filter: brightness(50%) contrast(120%) saturate(120%);
`;

const Title = styled(motion.h2)`
  font-size: 3rem;
  margin-bottom: 40px;
  font-family: "Orbitron", sans-serif;
  letter-spacing: 2px;
  color: #00ffe0;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  width: 100%;
`;

const AboutBox = styled(motion.div)`
  background: linear-gradient(120deg, rgba(30,30,46,1) 1%, rgba(31,82,107,1) 100%);
  padding: 30px;
  border-radius: 16px;
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out, background 0.3s ease-in-out;
  &:hover {
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.08);
  }
`;

const AboutText = styled.p`
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  line-height: 1.6;
  color: #e0e0e0;
`;

const AboutTitles = styled.h3`
  font-size: 1.2rem;
  font-family: "Orbitron", sans-serif;
  margin-bottom: 10px;
  color: #00ffe0;
`;

const SlideInBox = ({ children, from = "right" }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, x: 0 });
    } else {
      controls.start({ opacity: 0, x: from === "right" ? 100 : -100 });
    }
  }, [controls, isInView, from]);

  return (
    <AboutBox
      ref={ref}
      initial={{ opacity: 0, x: from === "right" ? 100 : -100 }}
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
    >
      {children}
    </AboutBox>
  );
};


function AboutMe() {
  return (
    <AboutContainer
      id="about"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4 }}
    >
      <ParallaxImage speed={-10} style={{ backgroundImage: `url(images/about-2.jpg)` }} />
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </Title>
      <AboutContent>
        <SlideInBox from="right">
          <AboutTitles>Who I Am</AboutTitles>
          <AboutText>
            I'm a passionate Web Developer & Computer Engineer who loves creating interactive and efficient web experiences.
          </AboutText>
        </SlideInBox>

        <SlideInBox from="right">
          <AboutTitles>Skills & Expertise</AboutTitles>
          <AboutText>
            Frontend: HTML, CSS, JavaScript, C#, React.js<br />
            Backend: ASP.NET Core, SQL Server, SQLite
          </AboutText>
        </SlideInBox>

        <SlideInBox from="right">
          <AboutTitles>Experience & Achievements</AboutTitles>
          <AboutText>
            3+ years in development, built multiple full-stack projects, and contributed to open-source platforms.
          </AboutText>
        </SlideInBox>

        <SlideInBox from="left">
          <AboutTitles>Address</AboutTitles>
          <AboutText>
            📍 Cebu City, Philippines<br />
            Open to remote opportunities.
          </AboutText>
        </SlideInBox>

        <SlideInBox from="left">
          <AboutTitles>Education</AboutTitles>
          <AboutText>
            🎓 B.S. in Computer Engineering<br />
            University of XYZ, Class of 2022
          </AboutText>
        </SlideInBox>

        <SlideInBox from="left">
          <AboutTitles>Work History</AboutTitles>
          <AboutText>
            💼 Junior Web Developer - Proweaver (2022–Present)<br />
            Developed & maintained client websites using ASP.NET Core + React.js
          </AboutText>
        </SlideInBox>
      </AboutContent>
    </AboutContainer>
  );
}

export default AboutMe;
