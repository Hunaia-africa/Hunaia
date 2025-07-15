"use client";

import { FC, useEffect, useRef } from "react";
import { Section } from "@/components/layout";
import styled, { keyframes } from "styled-components";

const GallerySection: FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Optional: Start slow auto-scroll on mobile
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || window.innerWidth > 768) return;

    let animationFrame: number;

    const autoScroll = () => {
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth) {
        el.scrollLeft = 0;
      } else {
        el.scrollLeft += 0.2; // Very slow scroll
      }
      animationFrame = requestAnimationFrame(autoScroll);
    };

    animationFrame = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <StyledSection id="gallery-section">
      <ContentWrapper>
        <TextColumn>
          <h2>Places to explore</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor ut labore et dolore magna aliqua.
          </p>
          <ExploreButton>Start exploring</ExploreButton>
        </TextColumn>

        <ImageGrid ref={scrollRef}>
          {Array.from({ length: 6 }).map((_, index) => (
            <ImageCard key={index}>Image</ImageCard>
          ))}
        </ImageGrid>
      </ContentWrapper>
    </StyledSection>
  );
};

export default GallerySection;

const StyledSection = styled(Section)`
  background: #f8f8f8;
  padding: 2rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  height: 100%;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextColumn = styled.div`
  flex: 1;
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    flex: 1;
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ExploreButton = styled.button`
  padding: 0.7rem 1.2rem;
  background: #fff;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #eee;
  }
`;

const ImageGrid = styled.div`
  flex: 2;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  gap: 1rem;

  @media (max-width: 768px) {
    display: flex;
    overflow-x: auto;
    gap: 1rem;
    padding-bottom: 1rem;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
  }
`;

const ImageCard = styled.div`
  background: #ddd;
  border-radius: 12px;
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  min-width: 200px;

  @media (max-width: 768px) {
    flex: 0 0 auto;
    min-width: 250px;
    height: 150px;
  }
`;
