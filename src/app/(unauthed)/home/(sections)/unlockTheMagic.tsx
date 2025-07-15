"use client";

import { FC, useState, useEffect } from "react";
import { Section } from "@/components/layout";
import { ArrowDown } from "lucide-react";
import styled from "styled-components";

const UnlockTheMagicSection: FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("unlock-magic-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        setIsVisible(rect.top >= 0 && rect.bottom > window.innerHeight / 2);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("gallery-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Section
      id="unlock-magic-section"
      style={{ backgroundColor: "transparent" }}
    >
      <BackgroundVideo
        autoPlay
        loop
        muted
        playsInline
        src="https://ik.imagekit.io/sgmianze96/hunaia/landing_vid_2yky_pyFdY.mp4?updatedAt=1741620544335"
      />

      <Overlay />

      <Content>
        <Heading>Unlock the magic of Kenya with Húnaia</Heading>
        <Description>
          Discover hidden gems, personalized recommendations, and unforgettable
          experiences—whether you're a local or a traveler.
          <ResponsiveBreak />
          Explore your world your way, with tailored guides to fit every taste
          and budget.
          <ResponsiveBreak />
          Let Hunaia make your next adventure extraordinary!
        </Description>
      </Content>

      {isVisible && (
        <ScrollButton onClick={scrollToNextSection}>
          <ArrowDown size={28} />
        </ScrollButton>
      )}
    </Section>
  );
};

export default UnlockTheMagicSection;

/* Styled Components */

const BackgroundVideo = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: -1;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 0;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 4rem 2rem;
`;

const Heading = styled.h2`
  color: #fff;
  font-size: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const Description = styled.p`
  color: #fff;
  line-height: 2;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.8;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.6;
  }
`;

const ScrollButton = styled.button`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.6);
  border: none;
  border-radius: 50%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }
`;

const ResponsiveBreak = styled.br`
  display: inline;

  @media (max-width: 768px) {
    display: none;
  }
`;
