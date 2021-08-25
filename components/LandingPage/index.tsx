import React from "react";
import styled from "styled-components";
import LandingBanner from "../LandingBanner";
import LandingContent from "../LandingContent";

export default function LandingPage() {
  return (
    <Wrapper>
      <LandingBanner />
      <LandingContent />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  min-height: 100vh;
  width: 100%;
  background-color: #1b1c22;
`;
