import React from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import styled from "styled-components";

const AboutContainer = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(30, 30, 46, 0.9);
  color: white;
  padding: 80px 10%;
  text-align: center;
  overflow: hidden;
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
  filter: brightness(70%);
`;

const Title = styled(motion.h2)`
  font-size: 3rem;
  margin-bottom: 20px;
  font-family: "Orbitron", sans-serif;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  margin-top: 20px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const AboutBox = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(-5px);
  }
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  font-family: "Poppins", sans-serif;
  line-height: 1.5;
`;

function AboutMe() {
  return (
    <AboutContainer id="about">
      <ParallaxImage speed={-10} style={{ backgroundImage: `url(images/about-2.jpg)` }} />
      <Title initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>About Me</Title>
      <AboutContent>
        <AboutBox whileHover={{ scale: 1.05 }}>
          <h3>Who I Am</h3>
          <AboutText>I'm a passionate Web Developer & Computer Engineer who loves creating interactive and efficient web experiences.</AboutText>
        </AboutBox>

        <AboutBox whileHover={{ scale: 1.05 }}>
          <h3>Skills & Expertise</h3>
          <AboutText>Frontend: HTML, CSS, JavaScript, React.js | Backend: Node.js, ASP.NET Core | Tools: Git, Firebase</AboutText>
        </AboutBox>

        <AboutBox whileHover={{ scale: 1.05 }}>
          <h3>Experience & Achievements</h3>
          <AboutText>3+ years in development, built multiple projects, and contributed to open-source platforms.</AboutText>
        </AboutBox>
      </AboutContent>
    </AboutContainer>
  );
}

export default AboutMe;
