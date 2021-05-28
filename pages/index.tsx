import styled, { keyframes } from "styled-components";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import HeroVisual from "../components/HeroVisual";

export const Wrapper = styled.div`
  background: rgba(26, 26, 26);
  min-height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  padding: 24px;
  justify-content: space-between;
  background: rgba(26, 26, 26, 0.5);
  backdrop-filter: blur(16px);
  z-index: 1;
`;

export const HeaderLogo = styled(Image)`
  opacity: 0.7;
`;

export const HeaderCTA = styled.a`
  color: white;
  font-weight: 600;
  letter-spacing: 2px;
  margin-right: 4px;
  &:hover {
    filter: brightness(0.8);
  }
`;

export const Main = styled.main`
  margin: 0 auto;
`;

export const HeroWrapper = styled.div`
  padding: 0 16px;
  overflow: hidden;
`;

export const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1080px;
  margin: 64px auto;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 0;
    margin-bottom: 96px;
  }
`;

export const HeroText = styled.div`
  width: 600px;
  padding: 16px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const HeroTitle = styled.h1`
  color: white;
  font-size: 96px;
  margin-bottom: 18px;
  background: linear-gradient(to right, #7cd8ff, #b2e6fd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 768px) {
    font-size: 60px;
  }
`;

export const HeroSubTitle = styled.h2`
  color: white;
  font-size: 48px;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 64px;
  }
`;

export const StyledHeroVisual = styled(HeroVisual)`
  margin-right: 16px;
  @media (max-width: 768px) {
    transform: scale(0.8);
  }
`;

export const IntroWrapper = styled.div`
  padding: 0 16px;
`;

export const IntroContainer = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`;

export const IntroText = styled.div`
  padding: 16px;
`;

export const IntroImageWrapper = styled.div`
  height: 400px;
  margin-left: -32px;
  margin-right: -32px;
  overflow: hidden;
  @media (max-width: 1144px) {
    margin: 0;
  }
  @media (max-width: 768px) {
    margin-left: -120%;
  }
`;

export const IntroTitle = styled.h2`
  color: white;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 8px;
`;

export const IntroDescription = styled.p`
  margin-top: 0;
  color: #ccc;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

const scrollSignalAnimation = keyframes`
  0%   {
      opacity: 0;
      transform: translateY(-20px);
  }
  30%  {
      opacity: 0.6;
      transform: translateY(-8px);
  }
  60%  {
    opacity: 0.6;
    transform: translateY(8px);
}
  100% {
      opacity: 0;
      transform: translateY(20px);
  }
`;

export const ScrollSignalWrapper = styled.div`
  margin-top: 56px;
  animation: ${scrollSignalAnimation} 3s linear 0s infinite;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ScrollSignal = styled(Image)``;

export const FeaturesWrapper = styled.div`
  margin: -80px 0 -64px;
  background: white;
  padding: 0 16px;
  position: relative;
  transform: skewY(4deg);
  @media (max-width: 600px) {
    margin-top: -120px;
  }
`;

export const FeaturesContainer = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  position: relative;
  transform: skewY(-4deg);
  padding: 80px 0 128px;
  @media (max-width: 768px) {
    padding-top: 48px;
  }
`;

export const VerticalLines = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  transform: skewY(4deg);
`;

export const VerticalLine = styled.div`
  position: absolute;
  top: 0;
  width: 1px;
  height: 100%;
  background: rgba(0, 0, 0, 0.08);
  &:first-child {
    left: 0;
  }
  &:nth-child(2) {
    left: 25%;
  }
  &:nth-child(3) {
    left: 50%;
  }
  &:nth-child(4) {
    left: 75%;
  }
  &:nth-child(5) {
    right: 0;
  }
  @media (max-width: 768px) {
    &:nth-child(2n) {
      display: none;
    }
  }
  @media (max-width: 600px) {
    display: none;
    &:first-child,
    &:last-child {
      display: block;
    }
  }
`;

export const FeaturesTitle = styled.h2`
  padding: 16px;
  font-size: 40px;
  font-weight: 600;
`;

export const FeaturesList = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const FeatureWrapper = styled.div`
  padding: 16px;
  width: 270px;
  @media (max-width: 768px) {
    width: 50%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const FeatureIcon = styled.div`
  width: 50px;
  height: 50px;
  background: #888;
`;

export const FeatureTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  position: relative;
`;

export const FeatureTitleAccent = styled.div`
  height: 18px;
  width: 1px;
  background: rgb(67, 138, 208);
  position: absolute;
  left: -16px;
`;

export const FeatureDescription = styled.p`
  font-size: 15px;
  color: #888;
`;

export const FinalCTAWrapper = styled.div`
  height: 400px;
  padding: 0 16px;
  position: relative;
  background: rgb(26, 26, 26);
`;

export const FinalCTAContainer = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 16px;
`;

export const FinalCTATitle = styled.h2`
  color: #eee;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 20px;
`;

export const FinalCTAButton = styled.a`
  display: block;
  width: fit-content;
  background: linear-gradient(to right, #7cd8ff, #b2e6fd);
  padding: 16px 40px;
  color: black;
  border-radius: 16px;
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 24px;
  filter: brightness(1.05);
  &:hover {
    filter: brightness(1.1);
  }
`;

export const Footer = styled.footer`
  background: #292929;
  padding: 0 16px;
`;

export const FooterContainer = styled.div`
  max-width: 1080px;
  padding: 64px 16px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const FooterLogo = styled(Image)`
  opacity: 0.5;
`;

export const FooterText = styled.div`
  color: #888;
  font-size: 14px;
`;

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Harbor</title>
        <meta name="description" content="Be with your team, from anywhere." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
          rel="stylesheet"
        ></link>
      </Head>
      <Wrapper>
        <Header>
          <HeaderLogo
            src="/logo_white.svg"
            alt="Harbor logo"
            width={311 / 3}
            height={63 / 3}
          />
          <HeaderCTA href="download">Get started</HeaderCTA>
        </Header>

        <Main>
          <HeroWrapper>
            <HeroContainer>
              <HeroText>
                <HeroTitle>Be with your team.</HeroTitle>
                <HeroSubTitle>From anywhere.</HeroSubTitle>
                <ScrollSignalWrapper>
                  <ScrollSignal
                    src="/scroll_signal.svg"
                    alt="Scroll signal"
                    width={87}
                    height={44}
                  />
                </ScrollSignalWrapper>
              </HeroText>
              <StyledHeroVisual />
            </HeroContainer>
          </HeroWrapper>
          <IntroWrapper>
            <IntroContainer>
              <IntroText>
                <IntroTitle>A virtual space in your menu bar</IntroTitle>
                <IntroDescription>
                  Harbor is designed to be as small as possible, both in screen
                  space and CPU footprint. <br />
                  So it's comfortable enough to leave on all day while you work.
                </IntroDescription>
              </IntroText>
              <IntroImageWrapper>
                <Image src="/desktop.png" width={2560} height={1532} />
              </IntroImageWrapper>
            </IntroContainer>
          </IntroWrapper>

          <FeaturesWrapper>
            <FeaturesContainer>
              <VerticalLines>
                <VerticalLine />
                <VerticalLine />
                <VerticalLine />
                <VerticalLine />
                <VerticalLine />
              </VerticalLines>
              <FeaturesTitle>Built for productivity</FeaturesTitle>
              <FeaturesList>
                <FeatureWrapper>
                  <Image src="/screenshare.svg" width={50} height={50} />
                  <FeatureTitle>
                    <FeatureTitleAccent />
                    Interactive screen share
                  </FeatureTitle>
                  <FeatureDescription>
                    See each other's cursors while screen sharing, like pointing
                    with fingers in real life.
                  </FeatureDescription>
                </FeatureWrapper>
                <FeatureWrapper>
                  <Image src="/whisper.svg" width={50} height={50} />
                  <FeatureTitle>
                    <FeatureTitleAccent />
                    Directed conversations
                  </FeatureTitle>
                  <FeatureDescription>
                    Whisper to an individual without leaving the group. Good for
                    pulling someone aside or asking a question without
                    disturbing the other
                  </FeatureDescription>
                </FeatureWrapper>
                <FeatureWrapper>
                  <Image src="/focus.svg" width={50} height={50} />
                  <FeatureTitle>
                    <FeatureTitleAccent />
                    Focus mode
                  </FeatureTitle>
                  <FeatureDescription>
                    Disable communications on a timer when you need to crank
                    something out in silence.
                  </FeatureDescription>
                </FeatureWrapper>
                <FeatureWrapper>
                  <Image src="/pulse.svg" width={50} height={50} />

                  <FeatureTitle>
                    <FeatureTitleAccent />A team pulse
                  </FeatureTitle>
                  <FeatureDescription>
                    See what work apps your teammates are on, to get a better
                    sense of when you can interrupt.
                  </FeatureDescription>
                </FeatureWrapper>
              </FeaturesList>
            </FeaturesContainer>
          </FeaturesWrapper>
          <FinalCTAWrapper>
            <FinalCTAContainer>
              <FinalCTATitle>Free, for now.</FinalCTATitle>
              <FinalCTAButton href="download">Get started</FinalCTAButton>
            </FinalCTAContainer>
          </FinalCTAWrapper>
        </Main>
        <Footer>
          <FooterContainer>
            <FooterLogo
              src="/logo_white.svg"
              alt="Harbor"
              width={311 / 3}
              height={63 / 3}
            />
            <FooterText>©{new Date().getFullYear()} Harbor</FooterText>
          </FooterContainer>
        </Footer>
      </Wrapper>
    </>
  );
};

export default Home;
