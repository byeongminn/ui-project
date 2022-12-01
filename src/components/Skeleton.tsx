import React, { useMemo } from "react";
import styled from "@emotion/styled";
import { keyframes, css } from "@emotion/react";

interface Props {
  width?: number; // 넓이
  height?: number; // 높이
  unit?: string; // width, height 단위
  rounded?: boolean; // 모서리 둥글게
  circle?: boolean; // 원형 스켈레톤
  count?: number; // inline 선언 시, 글자 수
  animation?: boolean; // 애니메이션 유무
  color?: string; // 스켈레톤 색상
  style?: React.CSSProperties; // 추가 CSS 스타일
  children?: React.ReactNode;
}

const pulseKeyframe = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

const pulseAnimation = css`
  animation: ${pulseKeyframe} 1.5s ease-in-out 0.5s infinite;
`;

const Base = styled.span<Props>`
  width: ${({ width, unit }) => width && unit && `${width}${unit}`};
  height: ${({ height, unit }) => height && unit && `${height}${unit}`};
  ${({ width, height }) => (width || height) && "display: block"};
  ${({ rounded }) => rounded && "border-radius: 8px"};
  ${({ circle }) => circle && "border-radius: 50%"};
  ${({ color }) => color && `background-color: ${color}`};
  ${({ animation }) => animation && pulseAnimation};
`;

const Content = styled.span`
  opacity: 0;
`;

const Skeleton = ({
  width,
  height,
  unit = "px",
  rounded,
  circle,
  count,
  animation = true,
  color = "#f4f4f4",
  style,
  children,
}: Props) => {
  const content = useMemo(
    () => [...Array(count)].map(() => "-").join(""),
    [count]
  );

  return (
    <Base
      width={width}
      height={height}
      unit={unit}
      rounded={rounded}
      circle={circle}
      animation={animation}
      color={color}
      style={style}
    >
      <Content>{children || content}</Content>
    </Base>
  );
};

export default Skeleton;
