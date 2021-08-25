import Image from "next/image";
import React from "react";
import styled from "styled-components";

export default function Navigation() {
  return (
    <Wrapper>
      <Image src="/icon.svg" alt="Skourse Academy" width="124" height="44" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 68px;
  background-color: #1b1c22;
  display: flex;
  align-items: center;
  padding: 0 87px;
`;
