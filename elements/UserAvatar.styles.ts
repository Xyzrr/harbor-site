import styled from "styled-components";
import Image from "next/image";

export const Wrapper = styled.div`
  color: white;
  border-radius: 50%;
  background: #444;
  font-size: 12px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  user-select: none;
  &:hover {
    filter: brightness(1.1);
  }
`;

export const AvatarImage = styled(Image).attrs({ layout: "fill" })`
  object-fit: cover;
`;
