import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const DotGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const DotRow = styled.div`
  display: flex;
  gap: 16px;
`;

export const Dot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
`;
