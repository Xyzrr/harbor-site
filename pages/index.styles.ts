import styled from "styled-components";
import Image from "next/image";

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
  display: flex;
  justify-content: space-between;
  max-width: 1080px;
  margin: 0 auto;
`;

export const HeroText = styled.div`
  width: 600px;
  padding: 16px;
`;

export const HeroTitle = styled.h1`
  color: white;
  font-size: 96px;
  margin-bottom: 18px;
`;

export const HeroSubTitle = styled.h2`
  color: white;
  font-size: 48px;
`;

export const HeroImage = styled.div`
  background: rgba(255, 255, 255, 0.2);
  width: 400px;
  height: 400px;
`;

export const IntroWrapper = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`;

export const IntroText = styled.div`
  padding: 16px;
`;

export const IntroImage = styled.div`
  height: 400px;
  background: rgba(255, 255, 255, 0.2);
  margin-left: -32px;
  margin-right: -32px;
`;

export const IntroTitle = styled.h2`
  color: white;
  font-weight: 600;
`;

export const IntroSubTitle = styled.h3`
  color: #ccc;
  font-weight: 400;
`;

export const FeaturesWrapper = styled.div`
  background: white;
  padding: ;
`;

export const FeaturesContainer = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 16px;
`;

export const FeaturesTitle = styled.h2`
  padding: 16px;
  font-size: 32px;
`;

export const FeaturesList = styled.div`
  display: flex;
`;

export const FeatureWrapper = styled.div`
  padding: 16px;
  width: 270px;
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
  color: #ccc;
`;

export const FinalCTAWrapper = styled.div`
  height: 400px;
`;

export const Footer = styled.footer`
  background: #666;
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
