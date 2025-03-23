import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// Styled Components

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(90deg, rgba(30,30,46,1) 1%, rgba(31,82,107,1) 100%);
  height: 100vh;
  color: white;
  padding: 0 10%;
  font-family: 'Poppins', sans-serif;
`;

const HeroText = styled.div`
  max-width: 500px;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  margin: 10px 0;
  font-family: 'Orbitron', sans-serif;
`;

const Subtitle = styled.h3`
  font-size: 1.5rem;
`;

const Description = styled.p`
  margin: 20px 0;
  line-height: 1.5;
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  margin-top: 20px;
  padding: 12px 24px;
  font-size: 1.2rem;
  color: black;
  background: #00E6FF;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  transition: 0.3s ease;
  
  &:hover {
    background: #00E6FF;
    transform: scale(1.1);
  }
`;

const HeroImageWrapper = styled(motion.div)`
  position: relative;
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackgroundLayer1 = styled.div`
  content: '';
  position: absolute;
  width: 430px;
  height: 430px;
  border-radius: 50%;
  background: linear-gradient(135deg, #000000, #00c3ff);
  animation: backgroundAnimation 5s ease infinite;
  top: -15px;
  left: 20px;
  z-index: 9;
`;

const BackgroundLayer2 = styled.div`
  content: '';
  position: absolute;
  width: 380px;
  height: 380px;
  border-radius: 50%;
  background: linear-gradient(135deg, #343258, #00c3ff);
  animation: backgroundAnimation 5s ease infinite;
  top: 40px;
  left: 6px;
  z-index: 10;
`;

const ProfileImage = styled.img`
  position: relative;
  border-radius: 50%;
  width: 400px;
  height: 418px;
  object-fit: contain;
  top: 10px;
  left: -5px;
  z-index: 11;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const SocialIcon = styled(motion.a)`
  font-size: 2rem;
  color: #00E6FF;
  transition: 0.3s ease;

  &:hover {
    color: #00E6FF;
    transform: scale(1.2);
  }
`;

// Floating Animation for Hero Image
const FloatingAnimation = {
  y: [0, -10, 0], 
  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.3 } },
};

function Hero() {
  const fullText = "Christian Bagatua";
  const [typedText, setTypedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(typingInterval);
        setInterval(() => {
          setCursorVisible((prev) => !prev);
        }, 500);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <HeroContainer>
      <HeroText>
        <Title>
          Hi,<br />I'm{" "}
          <span style={{ color: "#00E6FF" }}>{typedText}</span>
          <span style={{ color: "#00E6FF", opacity: cursorVisible ? 1 : 0 }}>
            |
          </span>
        </Title>
        <motion.h3 variants={subtitleVariants} initial="hidden" animate="visible">
          Web Developer / Computer Engineer
        </motion.h3>
        <Description>
          With years of experience building dynamic websites and innovative solutions, 
          I thrive on turning ideas into reality. My expertise lies in front-end and 
          back-end development, ensuring seamless functionality and design. Let's build 
          something amazing together!
        </Description>
        <CTAButton href="#projects">View My Work</CTAButton>

        <SocialIcons>
          <SocialIcon href="https://github.com/" target="_blank">
            <FaGithub />
          </SocialIcon>
          <SocialIcon href="https://linkedin.com/in/" target="_blank">
            <FaLinkedin />
          </SocialIcon>
          <SocialIcon href="https://twitter.com/" target="_blank">
            <FaTwitter />
          </SocialIcon>
        </SocialIcons>
      </HeroText>

      <HeroImageWrapper animate={FloatingAnimation}>
        <BackgroundLayer1 />
        <BackgroundLayer2 />
        <ProfileImage src="images/profile.png" alt="Profile" />
      </HeroImageWrapper>
    </HeroContainer>
  );
}

export default Hero;
