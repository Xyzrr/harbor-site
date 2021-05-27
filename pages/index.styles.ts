import styled, { keyframes } from "styled-components";
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
  padding: 16px;
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
`;

export const Main = styled.main`
  margin: 0 auto;
`;

export const HeroWrapper = styled.div`
  padding: 0 16px;
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
    font-size: 64px;
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
  background: white;
  padding: 0 16px;
`;

export const FeaturesContainer = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 64px 0;
`;

export const FeaturesTitle = styled.h2`
  padding: 16px;
  font-size: 32px;
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
  font-size: 15px;
  font-weight: 600;
`;

export const FeatureDescription = styled.p`
  font-size: 15px;
  color: #888;
`;

export const FinalCTAWrapper = styled.div`
  height: 400px;
`;

export const Footer = styled.footer`
  background: #555;
  padding: 0 16px;
`;

export const FooterContainer = styled.div`
  max-width: 1080px;
  padding: 64px 16px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const FooterText = styled.div`
  color: #ccc;
  font-size: 14px;
`;
