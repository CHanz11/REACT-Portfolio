import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Cursor = styled(motion.div)`
  width: 20px;
  height: 20px;
  background: #ffcc00;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  mix-blend-mode: difference;
  z-index: 1000;
  transform: translate(-50%, -50%);
`;

function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [visible, setVisible] = useState(true); // Track cursor visibility

  useEffect(() => {
    const moveCursor = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setVisible(true); // Show cursor when moving
    };

    const hideCursor = () => setVisible(false);
    const showCursor = () => setVisible(true);

    document.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", hideCursor);
    window.addEventListener("mouseenter", showCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", hideCursor);
      window.removeEventListener("mouseenter", showCursor);
    };
  }, []);

  return (
    <Cursor
      animate={{ left: mousePos.x, top: mousePos.y, opacity: visible ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
  );
}

export default CustomCursor;
