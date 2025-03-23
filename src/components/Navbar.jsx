import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background: rgba(30, 30, 30, 0.9);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
`;

const NavLink = styled(Link)`
  color: white;
  font-size: 18px;
  text-decoration: none;
  transition: 0.3s ease;

  &:hover {
    color: #ffd700; // Gold color on hover
  }
`;

function Navbar() {
  return (
    <NavContainer>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </NavContainer>
  );
}

export default Navbar;
