import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const ButtonStyled = styled(motion.button)`
  padding: 12px 24px;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  background: #00E6FF;
  color:rgb(0, 0, 0);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  outline: none;

  &:hover {
    background:rgb(0, 156, 173);
    box-shadow: 0px 5px 15px rgba(71, 255, 230, 0.3);
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
