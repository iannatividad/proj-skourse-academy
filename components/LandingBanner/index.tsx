import { Button, Typography } from "antd";
import React from "react";
import styled from "styled-components";

const { Title, Text } = Typography;

export default function LandingBanner() {
  return (
    <Wrapper>
      <ContentContainer>
        <StyledHeader>Become a full stack developer in 12 weeks</StyledHeader>
        <StyledSubHeader>
          Invest in your future! Learn coding and get a job after{" "}
          <b>12 weeks!</b> Time to focus on your skills.
        </StyledSubHeader>
        <ApplyNowBtn>Apply Now</ApplyNowBtn>
      </ContentContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 599px;
  width: 100%;
  background: url(${"/banner.png"});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  display: flex;
  align-items: center;
`;

const ContentContainer = styled.div`
  padding: 0 118px;
  width: 60%;

  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled(Title)`
  font-weight: bold;
  font-size: 48px;
  line-height: 45px;
  color: #fff;
  margin: 20px 0;
`;

const StyledSubHeader = styled(Text)`
  font-size: 22px;
  line-height: 30px;
  color: #fff;
`;

const ApplyNowBtn = styled(Button)`
  width: 165px;
  height: 60px;
  background: #755cde;
  border-radius: 20px;
  border: none;
  outline: none;

  color: #fff;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;

  margin: 26px 0 0 0;
`;
