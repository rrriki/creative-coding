import React, { useEffect, useRef } from "react";
import styled from "styled-components";
// @ts-ignore
import canvasSketch from "canvas-sketch";

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
  draw: (props: CanvasDrawingProps) => void;
  animate?: boolean;
}

export const Canvas: React.FC<CanvasProps> = (props) => {
  const { draw, animate } = props;
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    console.log("running canvas useEffect");
    
    canvasSketch(draw, {
      dimensions: [WIDTH, HEIGHT],
      units: "px",
      resizeCanvas: false,
      styleCanvas: true,
      scaleToView: false,
      canvas: ref.current,
      animate,
    });

    return function cleanUp() {
      console.log("Canvas unmounting");
    };
  }, [draw, animate]);

  return (
    <StyledCanvas
      id="canvas"
      ref={ref}
      {...props}
      width={WIDTH}
      height={HEIGHT}
    />
  );
};
