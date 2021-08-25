import { Typography } from "antd";
import React from "react";
import styled from "styled-components";

const { Title, Text } = Typography;

export default function LandingContent() {
  return (
    <Wrapper>
      <DetailsSection>
        <DetailHeader>Why Study Here at Skourse?</DetailHeader>
        <DetailContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          felis diam semper nec, sagittis amet quis nibh tellus. Viverra ut leo
          ultrices tellus sit mollis. Dignissim imperdiet luctus orci commodo.
          Quam euismod pharetra egestas amet bibendum amet etiam ultrices
          adipiscing. Morbi ac turpis non ac ut fusce. Aliquam amet eget aliquam
          posuere montes, tempus.{" "}
        </DetailContent>
        <DetailHeader>Who is it for? </DetailHeader>
        <DetailGridWrapper>
          <GridRow>
            <GridDetails>
              <GridDetailsIcon></GridDetailsIcon>
              <GridDetailsWrapper>
                <GridDetailsHeader>Career Shifters</GridDetailsHeader>
                <GridDetailsContent>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.Praesent felis diam semper nec, sagittis amet quis nibh
                  tellus.
                </GridDetailsContent>
              </GridDetailsWrapper>
            </GridDetails>
            <GridSpacer />
            <GridDetails>
              <GridDetailsIcon></GridDetailsIcon>
              <GridDetailsWrapper>
                <GridDetailsHeader>Fresh Graduates</GridDetailsHeader>
                <GridDetailsContent>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.Praesent felis diam semper nec, sagittis amet quis nibh
                  tellus.
                </GridDetailsContent>
              </GridDetailsWrapper>
            </GridDetails>
          </GridRow>
          <GridRow>
            <GridDetails>
              <GridDetailsIcon></GridDetailsIcon>
              <GridDetailsWrapper>
                <GridDetailsHeader>IT Graduates</GridDetailsHeader>
                <GridDetailsContent>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.Praesent felis diam semper nec, sagittis amet quis nibh
                  tellus.
                </GridDetailsContent>
              </GridDetailsWrapper>
            </GridDetails>
            <GridSpacer />
            <GridDetails>
              <GridDetailsIcon></GridDetailsIcon>
              <GridDetailsWrapper>
                <GridDetailsHeader>IT Professionals</GridDetailsHeader>
                <GridDetailsContent>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.Praesent felis diam semper nec, sagittis amet quis nibh
                  tellus.
                </GridDetailsContent>
              </GridDetailsWrapper>
            </GridDetails>
          </GridRow>
        </DetailGridWrapper>
      </DetailsSection>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const DetailsSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 122px 157px;
`;

const DetailHeader = styled(Title)`
  color: #fff;
  font-weight: bold;
  font-size: 48px;
  line-height: 30px;
`;

const DetailContent = styled(Text)`
  color: #fff;
  font-size: 24px;
  line-height: 30px;
  margin: 50px 0 111px 0;
`;

const DetailGridWrapper = styled.div`
  margin: 69px 0 0 0;
`;

const GridRow = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0 80px 0;
`;

const GridDetails = styled.div`
  display: flex;
`;

const GridDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 34px;
  width: 309px;
`;

const GridDetailsHeader = styled(Text)`
  color: #fff;
  font-weight: bold;
  font-size: 30px;
  line-height: 30px;
  margin: 0 0 12px 0;
`;

const GridDetailsContent = styled(Text)`
  color: #fff;
  font-size: 14px;
  line-height: 17px;
`;

const GridDetailsIcon = styled.div`
  min-width: 70px;
  height: 70px;
  background: #00255b;
  border-radius: 50%;
`;

const GridSpacer = styled.div`
  min-width: 97px;
`;
