import * as S from "./download.styles";
import React from "react";

export interface DownloadPageProps {
  className?: string;
}

const DownloadPage: React.FC<DownloadPageProps> = ({ className }) => {
  return (
    <S.Wrapper className={className}>
      <S.Container>
        <a href="/">
          <S.HeaderLogo
            src="/logo_light_colored.svg"
            alt="Harbor logo"
            width={311 / 2}
            height={63 / 2}
          />
        </a>
        <S.Title>Download Harbor</S.Title>
        <S.DownloadButton
          href="https://github.com/Xyzrr/harbor/releases/download/v0.3.0/Harbor-0.3.0.dmg"
          download
        >
          <S.PlatformLogoWrapper>
            <S.PlatformLogo
              src="/platform-logo-macos.svg"
              width={26}
              height={26}
            />
          </S.PlatformLogoWrapper>
          Download for MacOS
        </S.DownloadButton>
      </S.Container>
    </S.Wrapper>
  );
};

export default DownloadPage;
