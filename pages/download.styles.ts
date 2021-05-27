import styled from "styled-components";
import Image from "next/image";

export const Wrapper = styled.div``;

export const Container = styled.div`
  max-width: 1080px;
  margin: 20vh auto 0;
`;

export const HeaderLogo = styled(Image)``;

export const Title = styled.h1`
  font-size: 56px;
  margin-bottom: 52px;
`;

export const PlatformLogoWrapper = styled.div`
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
  color: white;
  text-decoration: none;
  font-size: 26px;
  font-weight: 600;
  background: black;
  &:hover {
    background: #222;
  }
`;
