"use client"

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
    <Section id="unlock-magic-section" style={{ backgroundColor: "transparent"}}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        src="https://ik.imagekit.io/sgmianze96/hunaia/landing_vid_2yky_pyFdY.mp4?updatedAt=1741620544335"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: -1, // Puts video behind content
        }}
      />

      {/* Optional: Dark Overlay for Readability */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.6)", // Adjust opacity for readability
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "4rem 2rem" }}>
        <h2 style={{ color: "#fff", fontSize: "2rem" }}>Unlock the magic of Kenya with Húnaia</h2>
        <br />
        <p style={{ color: "#fff", lineHeight: "2", fontSize: "1.2rem" }}>
          Discover hidden gems, personalized recommendations, and unforgettable
          experiences—whether you're a local or a traveler. <br />
          Explore your world your way, with tailored guides to fit every taste
          and budget. <br /> Let Hunaia make your next adventure extraordinary!
        </p>
      </div>

       {/* Scroll Button (Only Visible in First Section) */}
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
