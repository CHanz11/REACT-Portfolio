import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import styled from "styled-components";

const ContactContainer = styled(motion.section)`
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

const ContactTitle = styled(motion.h2)`
  font-size: 3rem;
  margin-bottom: 40px;
  font-family: "Orbitron", sans-serif;
  letter-spacing: 2px;
  color: #00ffe0;
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  width: 100%;
`;

const ContactBox = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
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

  p {
    margin: 10px 0;
    font-family: "Poppins", sans-serif;
    color: #ccc;
    font-size: 1rem;
  }
`;

const ContactForm = styled.form`
  display: grid;
  gap: 20px;
  width: 100%;
  max-width: 500px;
  margin-top: 20px;
`;

const Input = styled.input`
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  background: #333;
  color: #fff;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  background: #333;
  color: #fff;
  font-size: 1rem;
  resize: none;
  height: 150px;
`;

const SubmitButton = styled.button`
  padding: 12px;
  background-color: #00ffe0;
  border: none;
  color: #000;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #00ccbb;
  }
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
    <ContactBox
      ref={ref}
      initial={{ opacity: 0, x: from === "right" ? 100 : -100 }}
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
    >
      {children}
    </ContactBox>
  );
};

function Contact() {
  return (
    <ContactContainer
      id="contact"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4 }}
    >
      <ParallaxImage speed={-10} style={{ backgroundImage: `url(images/contact.jpg)` }} />
      <ContactTitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </ContactTitle>
      <ContactContent>
        <SlideInBox from="right">
          <p>📞 Phone: +63 912 345 6789</p>
          <p>📧 Email: myemail@example.com</p>
        </SlideInBox>

        <SlideInBox from="left">
          <ContactForm onSubmit={(e) => e.preventDefault()}>
            <Input type="text" placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
            <TextArea placeholder="Your Message" required />
            <SubmitButton type="submit">Send Message</SubmitButton>
          </ContactForm>
        </SlideInBox>
      </ContactContent>
    </ContactContainer>
  );
}

export default Contact;
