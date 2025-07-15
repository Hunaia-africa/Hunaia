"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  useEffect(() => {
    const interactiveElements = document.querySelectorAll("a, button, [data-cursor]");

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => setHovered(true));
      el.addEventListener("mouseleave", () => setHovered(false));
    });

    return () => {
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", () => setHovered(true));
        el.removeEventListener("mouseleave", () => setHovered(false));
      });
    };
  }, []);

  return <CursorStyle x={position.x} y={position.y} $hovered={hovered} />;
};

export default CustomCursor;

/* Styled Component for Cursor */
const CursorStyle = styled.div<{ x: number; y: number; $hovered: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: ${(props) => (props.$hovered ? "50px" : "20px")};
  height: ${(props) => (props.$hovered ? "50px" : "20px")};
  background: rgba(255, 255, 255, 0.3);
  border: 2px solid rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: width 0.2s ease, height 0.2s ease, background 0.2s ease;
  mix-blend-mode: difference;
  position: fixed;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;
  z-index: 9999;
`;
