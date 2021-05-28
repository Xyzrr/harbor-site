import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Head from "next/head";

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
  color: #ddd;
  font-weight: 400;
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

export interface DownloadPageProps {
  className?: string;
}

const DownloadPage: React.FC<DownloadPageProps> = ({ className }) => {
  return (
    <>
      <Head>
        <title>Download Harbor</title>
        <meta name="description" content="Be with your team, from anywhere." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Wrapper className={className}>
        <Container>
          <a href="/">
            <HeaderLogo
              src="/logo_light_colored.svg"
              alt="Harbor logo"
              width={311 / 2}
              height={63 / 2}
            />
          </a>
          <Title>Download Harbor</Title>
          <DownloadButton
            href="https://github.com/Xyzrr/harbor/releases/download/v0.3.0/Harbor-0.3.0.dmg"
            download
          >
            <PlatformLogoWrapper>
              <PlatformLogo
                src="/platform-logo-macos.svg"
                width={26}
                height={26}
              />
            </PlatformLogoWrapper>
            Download for MacOS
          </DownloadButton>
        </Container>
      </Wrapper>
    </>
  );
};

export default DownloadPage;
