import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const ButtonStyled = styled(motion.button)`
  padding: 12px 24px;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  background: #ff4757;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  outline: none;

  &:hover {
    background: #ff6b81;
    box-shadow: 0px 5px 15px rgba(255, 71, 87, 0.3);
  }

  &:active {
    transform: scale(0.95);
  }
`;

function Button({ text, onClick }) {
  return (
    <ButtonStyled whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={onClick}>
      {text}
    </ButtonStyled>
  );
}

export default Button;
