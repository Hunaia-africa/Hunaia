"use client";

import { FC } from "react";
import styled from "styled-components";

const ExploreKenyaSection: FC = () => {
  return (
    <Wrapper>
      <Content>
        <Headline>Explore Kenya with Hunaia. The adventure begins now!</Headline>
        <ExploreButton>Start exploring</ExploreButton>
      </Content>

      <Footer>Footer</Footer>
    </Wrapper>
  );
};

export default ExploreKenyaSection;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background: #fff;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
`;

const Headline = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #000;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const ExploreButton = styled.button`
  background: #e0e0e0;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #cfcfcf;
  }
`;

const Footer = styled.footer`
  background: #ddd;
  text-align: center;
  padding: 1rem;
  font-weight: bold;
`;