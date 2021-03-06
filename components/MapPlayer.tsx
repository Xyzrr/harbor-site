import * as S from "./MapPlayer.styles";
import React from "react";
import Color from "color";

export type BusyType = "default" | "meeting" | "food" | "focus" | "exercise";

export interface PlayerSummary {
  sid?: string;
  name: string;
  photoUrl: string | null;
  color: number;
  x: number;
  y: number;
  dir: number;
  audioInputOn?: boolean;
  audioOutputOn?: boolean;
  videoInputOn?: boolean;
  screenShareOn?: boolean;
  busyType?: BusyType;
  spaceFocused?: boolean;
}

export interface MapPlayerProps {
  className?: string;
  playerSummary: PlayerSummary;
  self?: boolean;
}

const MapPlayer: React.FC<MapPlayerProps> = React.memo(function MapPlayer({
  className,
  playerSummary,
  self,
}) {
  const { dir } = playerSummary;
  const [interpolableDir, setInterpolableDir] = React.useState(dir);
  React.useEffect(() => {
    setInterpolableDir(
      (d) => d + (((((dir / Math.PI) * 180 - d) % 360) + 540) % 360) - 180
    );
  }, [dir]);

  return (
    <S.Wrapper
      className={className}
      busy={!!playerSummary.busyType}
      self={self}
      color={Color(playerSummary.color).string()}
      style={{
        transform: `translate(${playerSummary.x}px, ${playerSummary.y}px)`,
      }}
    >
      {playerSummary.spaceFocused && (
        <S.Pointer
          style={{
            transform: `translate(-50%, -50%) rotate(${interpolableDir}deg) translateX(20px) rotate(45deg)`,
          }}
        />
      )}

      <S.LiquidUserAvatar
        userName={playerSummary.name}
        photoUrl={playerSummary.photoUrl}
      />
      {playerSummary.busyType && <S.BusyIcon name="event_busy" />}
    </S.Wrapper>
  );
});

export default MapPlayer;
