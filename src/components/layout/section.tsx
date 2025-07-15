"use client"

import styled from "styled-components";

//Custom section component to be reused across the app
const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 1rem 2rem;
  gap: 32px;
  font-family: var(--font-geist-sans);
  background-color: #e3ebf2;
  text-align: center;
`;

export default Section