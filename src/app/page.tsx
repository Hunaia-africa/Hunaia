"use client";

import styled, { keyframes } from "styled-components";
import Image from "next/image";
import Logo from "@/assets/logotype.svg";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 1rem;
  gap: 32px;
  font-family: var(--font-geist-sans);
  background-color: #bae0da;
`;

const Spinner = styled.div`
  border: 0.5rem solid rgba(255, 255, 255, 0.3);
  border-top: 0.5rem solid #34413e;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  animation: ${spin} 1.5s linear infinite;
`;

const StyledImage = styled(Image)`
  max-width: 100%;
  height: auto;
`;


export default function Home() {
  return (
    <Page>
      <StyledImage alt="Logo" src={Logo} />
      <p style={{ color: "#34413e", fontSize: "1.5rem", fontWeight: "500" }}>
        Coming soon
      </p>
      <Spinner />
    </Page>
  );
}
