import React, { useState } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import logo from "../assets/images/main-logo.png"; // Update path if needed

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background: linear-gradient(90deg, rgba(13,27,42,1) 3%, rgba(28,56,85,1) 72%);
  padding: 15px 20px;
  z-index: 1000;
  width: 94.7vw;
  box-shadow: 0 0 20px rgba(1, 39, 39, 0.6);
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    max-height: 90px;
    width: auto;
    display: block;
  }
`;

const Navigation = styled.nav`
  position: relative;
  z-index: 10;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    position: absolute;
    top: 70px;
    right: 20px;
    background: rgba(13, 27, 42, 0.95);
    flex-direction: column;
    padding: 20px;
    border-radius: 12px;
  }
`;

const NavItem = styled.li``;

const ScrollLink = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
  color: #fff;
  padding: 5px 10px;
  border: 2px solid transparent;
  transition: 0.3s;
  cursor: pointer;

  &.active,
  &:hover {
    border-color: cyan;
    box-shadow: 0 0 10px cyan;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;
  margin-left: 20px;

  span {
    width: 25px;
    height: 3px;
    background: #fff;
    border-radius: 5px;
    z-index: 20;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.5);
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  opacity: ${({ open }) => (open ? 1 : 0)};
  transition: visibility 0.3s, opacity 0.3s ease-in-out;
  z-index: 7;
`;

function Navbar({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Header>
        <Container>
          <Logo>
            <a href="/">
              <img src={logo} alt="ChanDesigns Logo" />
            </a>
          </Logo>
          <Navigation>
            <NavLinks open={menuOpen}>
              <NavItem>
                <ScrollLink
                  to="hero"
                  smooth={true}
                  duration={500}
                  className={activeSection === "hero" ? "active" : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </ScrollLink>
              </NavItem>
              <NavItem>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  className={activeSection === "about" ? "active" : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  About Me
                </ScrollLink>
              </NavItem>
              <NavItem>
                <ScrollLink
                  to="projects"
                  smooth={true}
                  duration={500}
                  className={activeSection === "projects" ? "active" : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  Projects
                </ScrollLink>
              </NavItem>
              <NavItem>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  className={activeSection === "contact" ? "active" : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </ScrollLink>
              </NavItem>
            </NavLinks>
            <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
              <span />
              <span />
              <span />
            </Hamburger>
          </Navigation>
        </Container>
      </Header>
      <Overlay open={menuOpen} onClick={() => setMenuOpen(false)} />
    </>
  );
}

export default Navbar;
