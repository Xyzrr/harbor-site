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
    </S.Wrapper>
  );
};

export default HeroVisual;
