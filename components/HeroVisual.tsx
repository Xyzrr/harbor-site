import * as S from "./HeroVisual.styles";
import React from "react";

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
    </S.Wrapper>
  );
};

export default HeroVisual;
