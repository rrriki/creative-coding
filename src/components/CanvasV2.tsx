import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

export type CanvasDrawingProps = {
  context: CanvasRenderingContext2D;
  width: number;
  height: number;
};

const StyledCanvas = styled.canvas`
  background-color: #e1e3df;
  &:hover {
    filter: hue-rotate(90deg);
  }
`;

const WIDTH = 400;
const HEIGHT = 400;

interface CanvasProps {
  draw: (context: CanvasDrawingProps, frame: number) => void;
  animate?: boolean;
}

export const CanvasV2: React.FC<CanvasProps> = (props) => {
  const { draw, animate } = props;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameIdRef = useRef<number>(0);
  const frameRef = useRef<number>(0);
  const [pause, setPause] = useState<boolean>(false);

  const render = useCallback(() => {
    const context = canvasRef.current?.getContext("2d");

    if (!context) {
      return;
    }

    context.clearRect(0, 0, WIDTH, HEIGHT);

    draw({ context, width: WIDTH, height: HEIGHT }, frameRef.current);

    if (!animate) {
      return;
    }

    animationFrameIdRef.current = requestAnimationFrame(render);
    frameRef.current = frameRef.current + 1;
  }, [draw, animate]);

  useEffect(() => {
    console.log("running canvas useEffect");
    if (pause) {
      return;
    }

    animationFrameIdRef.current = requestAnimationFrame(render);

    return function cleanUp() {
      console.log("Canvas unmounting");
      cancelAnimationFrame(animationFrameIdRef.current);
    };
  }, [draw, animate, pause, render]);

  const handlePause = () => {
    setPause((isPaused) => !isPaused);
  };

  return (
    <StyledCanvas
      id="canvas"
      ref={canvasRef}
      {...props}
      width={WIDTH}
      height={HEIGHT}
      onClick={handlePause}
    />
  );
};
