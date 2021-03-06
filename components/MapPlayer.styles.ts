import styled, { css } from "styled-components";
import UserAvatar from "../elements/UserAvatar";
import Icon from "../elements/Icon";
import Color from "color";

export const LiquidUserAvatar = styled(UserAvatar)`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  font-size: 14px;
`;

export const Pointer = styled.div`
  width: 12px;
  height: 12px;
  background: green;
  position: absolute;
  top: 50%;
  left: 50%;
  transition: transform 0.15s;
`;

export const Wrapper = styled.div<{
  color: string;
  self?: boolean;
  busy?: boolean;
}>`
  position: absolute;
  width: 44px;
  height: 44px;
  left: -22px;
  top: -22px;
  border: 2px solid ${(props) => props.color};
  background: ${(props) => props.color};
  border-radius: 50%;
  user-select: none;
  ${(props) =>
    !props.self &&
    css`
      transition: transform 0.15s;
    `}
  ${(props) =>
    props.busy &&
    css`
      ${LiquidUserAvatar} {
        filter: brightness(0.5);
      }
    `}

  ${LiquidUserAvatar} {
    background: ${(props) => Color(props.color).darken(0.1).string()};
  }
  ${Pointer} {
    background: ${(props) => props.color};
  }
`;

export const BusyIcon = styled(Icon)`
  position: absolute;
  z-index: 1;
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  opacity: 0.7;
`;
