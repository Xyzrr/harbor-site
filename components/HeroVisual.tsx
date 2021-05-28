import * as S from "./HeroVisual.styles";
import React from "react";
import MapPlayer from "./MapPlayer";
import Color from "color";

export interface HeroVisualProps {
  className?: string;
}

const HeroVisual: React.FC<HeroVisualProps> = ({ className }) => {
  return (
    <S.Wrapper className={className}>
      <S.DotGrid>
        {Array(12)
          .fill(0)
          .map((_, i) => (
            <S.DotRow key={i}>
              {Array(16)
                .fill(0)
                .map((_, j) => (
                  <S.Dot key={j}></S.Dot>
                ))}
            </S.DotRow>
          ))}
      </S.DotGrid>
      <MapPlayer
        playerSummary={{
          name: "Carey Phelps",
          photoUrl: "/carey.png",
          color: Color("#E6FF4F").rgbNumber(),
          x: 30,
          y: -20,
          dir: 0.6 * Math.PI,
          spaceFocused: true,
        }}
      />
      <MapPlayer
        playerSummary={{
          name: "Anni",
          photoUrl: "/anni.png",
          color: Color("#589AA9").rgbNumber(),
          x: 0,
          y: 50,
          dir: 1.6 * Math.PI,
          spaceFocused: true,
        }}
      />
      <MapPlayer
        playerSummary={{
          name: "Veronica",
          photoUrl: "/veronica.png",
          color: Color("#72A958").rgbNumber(),
          x: 330,
          y: 40,
          dir: Math.PI,
          spaceFocused: false,
          busyType: "default",
        }}
      />
      <MapPlayer
        playerSummary={{
          name: "Lavanya Shukla",
          photoUrl: "/lavanya.png",
          color: Color("#5A58A9").rgbNumber(),
          x: 100,
          y: 250,
          dir: 1.7 * Math.PI,
          spaceFocused: true,
        }}
      />
      <MapPlayer
        playerSummary={{
          name: "Axel",
          photoUrl: "/axel.png",
          color: Color("#72A958").rgbNumber(),
          x: 178,
          y: 265,
          dir: 1.3 * Math.PI,
          spaceFocused: true,
        }}
      />
      <MapPlayer
        playerSummary={{
          name: "Tom",
          photoUrl: "/tom.png",
          color: Color("#A9585D").rgbNumber(),
          x: 195,
          y: 195,
          dir: 0.8 * Math.PI,
          spaceFocused: true,
        }}
      />
    </S.Wrapper>
  );
};

export default HeroVisual;
