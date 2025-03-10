import { FC } from "react";
import { Section } from "@/components/layout";

const UnlockTheMagicSection: FC = () => {
  return (
    <Section style={{ backgroundColor: "transparent"}}>
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

    </Section>
  );
};

export default UnlockTheMagicSection;
