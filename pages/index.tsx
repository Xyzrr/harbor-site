import * as S from "./index.styles";

import Head from "next/head";
import Image from "next/image";

export default function Home() {
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
      </Head>
      <S.Wrapper>
        <S.Header>
          <S.HeaderLogo
            src="/logo_white.svg"
            alt="Harbor"
            width={311 / 3}
            height={63 / 3}
          />
          <S.HeaderCTA>Get started</S.HeaderCTA>
        </S.Header>

        <S.Main>
          <S.HeroWrapper>
            <S.HeroText>
              <S.HeroTitle>Be with your team.</S.HeroTitle>
              <S.HeroSubTitle>From anywhere.</S.HeroSubTitle>
            </S.HeroText>
            <S.HeroImage></S.HeroImage>
          </S.HeroWrapper>
          <S.IntroWrapper>
            <S.IntroText>
              <S.IntroTitle>A virtual space in your menu bar</S.IntroTitle>
              <S.IntroSubTitle>
                Harbor is design to be as small as possible, both in screen
                space and CPU footprint. So it's comfortable enough to leave on
                all day while you work.
              </S.IntroSubTitle>
            </S.IntroText>
            <S.IntroImage />
          </S.IntroWrapper>

          <S.FeaturesWrapper>
            <S.FeaturesContainer>
              <S.FeaturesTitle>Built for productivity</S.FeaturesTitle>
              <S.FeaturesList>
                <S.FeatureWrapper>
                  <S.FeatureIcon />
                  <S.FeatureTitle>Interactive screen sharing</S.FeatureTitle>
                  <S.FeatureDescription>
                    See each other's cursors while screen sharing, like pointing
                    with fingers in real life.
                  </S.FeatureDescription>
                </S.FeatureWrapper>
                <S.FeatureWrapper>
                  <S.FeatureIcon />
                  <S.FeatureTitle>Directed conversations</S.FeatureTitle>
                  <S.FeatureDescription>
                    Whisper to an individual without leaving the group. Good for
                    pulling someone aside or asking a question without
                    disturbing the others.
                  </S.FeatureDescription>
                </S.FeatureWrapper>
                <S.FeatureWrapper>
                  <S.FeatureIcon />
                  <S.FeatureTitle>Focus mode</S.FeatureTitle>
                  <S.FeatureDescription>
                    Disable communications on a timer when you need to crank
                    something out in silence.
                  </S.FeatureDescription>
                </S.FeatureWrapper>
                <S.FeatureWrapper>
                  <S.FeatureIcon />
                  <S.FeatureTitle>A team pulse</S.FeatureTitle>
                  <S.FeatureDescription>
                    See what work apps your teammates are on, to get a better
                    sense of when you can interrupt.
                  </S.FeatureDescription>
                </S.FeatureWrapper>
              </S.FeaturesList>
            </S.FeaturesContainer>
          </S.FeaturesWrapper>
          <S.FinalCTAWrapper></S.FinalCTAWrapper>
        </S.Main>
        <S.Footer>
          <S.FooterContainer>
            <S.HeaderLogo
              src="/logo_white.svg"
              alt="Harbor"
              width={311 / 3}
              height={63 / 3}
            />
            <S.FooterText>©{new Date().getFullYear()} Harbor</S.FooterText>
          </S.FooterContainer>
        </S.Footer>
      </S.Wrapper>
    </>
  );
}
