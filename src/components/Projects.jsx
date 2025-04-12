// components/Projects.jsx

import React from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import Slider from "react-slick";
import styled from "styled-components";

const ProjectsContainer = styled(motion.section)`
  position: relative;
  min-height: 100vh;
  padding: 80px 10%;
  text-align: center;
  color: #fff;
  overflow: hidden;
  background: rgba(30, 30, 30, 0.8);
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
  font-size: 2.5rem;
  margin-bottom: 40px;
  font-family: "Orbitron", sans-serif;
  letter-spacing: 2px;
  color: #00ffe0;
`;

const ProjectCard = styled.div`
  background: #1a1a1a;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 255, 224, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  h3 {
    font-family: "Orbitron", sans-serif;
    font-size: 1.2rem;
    margin: 10px 0;
    color: #00ffe0;
  }

  p {
    font-family: "Poppins", sans-serif;
    font-size: 0.95rem;
    padding: 0 16px 20px;
    color: #ccc;
  }
`;

function Projects() {
  const projects = [
    {
      title: "Project Alpha",
      image: "/images/project-2.jpg",
      link: "https://example.com/alpha",
      description: "A modern e-commerce platform."
    },
    {
      title: "Project Beta",
      image: "/images/about.jpg",
      link: "https://example.com/beta",
      description: "A real-time chat app."
    },
    {
      title: "Project Gamma",
      image: "/images/contact.jpg",
      link: "https://example.com/gamma",
      description: "A portfolio CMS dashboard."
    },
    {
      title: "Project Delta",
      image: "/images/profile.jpg",
      link: "https://example.com/delta",
      description: "Social media landing page clone."
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <ProjectsContainer
      id="projects"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4 }}
    >
      <ParallaxImage speed={-10} style={{ backgroundImage: `url(/images/project-2.jpg)` }} />
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </Title>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </a>
          </ProjectCard>
        ))}
      </Slider>
    </ProjectsContainer>
  );
}

export default Projects;
