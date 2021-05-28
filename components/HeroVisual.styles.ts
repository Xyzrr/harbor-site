import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const DotGrid = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DotRow = styled.div`
  display: flex;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const Dot = styled.div`
  &:not(:last-child) {
    margin-right: 16px;
  }
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
`;
