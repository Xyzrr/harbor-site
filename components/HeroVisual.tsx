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
          color: Color("#a9585d").rgbNumber(),
          x: 40,
          y: 10,
          dir: 0,
          spaceFocused: true,
        }}
      />
      <MapPlayer
        playerSummary={{
          name: "Veronica",
          photoUrl: "/veronica.png",
          color: Color("#5A58A9").rgbNumber(),
          x: 40,
          y: 90,
          dir: Math.PI / 4,
          spaceFocused: true,
        }}
      />
      <MapPlayer
        playerSummary={{
          name: "Lavanya Shukla",
          photoUrl: "/lavanya.png",
          color: Color("#72A958").rgbNumber(),
          x: 140,
          y: 190,
          dir: Math.PI,
          spaceFocused: true,
        }}
      />
    </S.Wrapper>
  );
};

export default HeroVisual;
