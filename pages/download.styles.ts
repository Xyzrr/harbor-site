import styled from "styled-components";
import Image from "next/image";

export const Wrapper = styled.div`
  background: rgba(26, 26, 26);
  min-height: 100vh;
  padding: 16px;
`;

export const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto 0;
  padding: 20vh 16px 16px;
`;

export const HeaderLogo = styled(Image)`
  opacity: 0.7;
  &:hover {
    opacity: 0.9;
  }
`;

export const Title = styled.h1`
  font-size: 56px;
  margin-bottom: 52px;
  color: white;
  font-weight: 600;
`;

export const PlatformLogoWrapper = styled.div`
  filter: invert(100%);
  margin-right: 16px;
  margin-left: -4px;
`;

export const PlatformLogo = styled(Image)``;

export const DownloadButton = styled.a`
  display: flex;
  width: fit-content;
  align-items: center;
  padding: 16px 32px;
  border-radius: 8px;
  color: black;
  text-decoration: none;
  font-size: 26px;
  font-weight: 600;
  background: white;
  &:hover {
    background: #f6f6f6;
  }
`;
