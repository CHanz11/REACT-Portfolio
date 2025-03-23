import React from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import styled from "styled-components";

const SectionContainer = styled(motion.div)`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${({ bg }) => bg || "rgba(30, 30, 30, 0.8)"};
  color: white;
  font-family: "Arial", sans-serif;
  text-align: center;
  overflow: hidden;
  padding: 20px;
  cursor: pointer;

  &:hover {
    background: ${({ bg }) => bg || "rgba(50, 50, 50, 0.9)"};
  }
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
  transition: filter 0.3s ease-in-out;

  ${SectionContainer}:hover & {
    filter: brightness(90%);
  }
`;

const Title = styled(motion.h2)`
  font-size: 3rem;
  margin-bottom: 1rem;
  transition: color 0.3s ease-in-out;

  ${SectionContainer}:hover & {
    color: #00E6FF;
  }
`;

const Text = styled(motion.p)`
  font-size: 1.2rem;
  max-width: 600px;
  transition: color 0.3s ease-in-out;

  ${SectionContainer}:hover & {
    color: #ccc;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;


function Section({ title, text, bg, image, children }) {
  return (
    <SectionContainer
      bg={bg}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
    >
      {image && <ParallaxImage speed={-10} style={{ backgroundImage: `url(${image})` }} />}
      <Title>{title}</Title>
      <Text>{text}</Text>
      <Content>{children}</Content> {/* This allows buttons & other elements */}
    </SectionContainer>
  );
}

export default Section;
