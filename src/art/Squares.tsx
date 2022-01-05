import React from "react";
import { Canvas, CanvasDrawingProps } from "../components";
import { randomlySpreadValue } from "../utils";

type SquareProperties = { x: number; y: number; w: number; h: number };

export const Squares: React.FC = () => {

  const drawBlackSquare = (
    context: CanvasRenderingContext2D,
    properties: SquareProperties
  ) => {
    const { x, y, w, h } = properties;
    context.beginPath();
    context.strokeStyle = "black";
    context.lineWidth = 1;
    context.rect(x, y, w, h);
    context.stroke();
  };

  const drawRandomRedSquare = (
    context: CanvasRenderingContext2D,
    properties: SquareProperties
  ) => {
    const { x, y, w, h } = properties;
    context.beginPath();
    context.strokeStyle = "red";
    context.lineWidth = 3;
    const randX = randomlySpreadValue(x);
    const randY = randomlySpreadValue(y);
    const randW = randomlySpreadValue(w);
    const randH = randomlySpreadValue(h);
    context.rect(randX, randY, randW, randH);
    context.stroke();
  };

  const drawSquares = async ({
    context,
    width,
    height,
  }: CanvasDrawingProps) => {

    let x, y;
    const w = width * 0.135;
    const h = height * 0.135;
    const gap = width * 0.025;

    const widthFactor = width * 0.03;
    const heightFactor = height * 0.03;

    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 6; j++) {
        x = widthFactor + (w + gap) * i;
        y = heightFactor + (h + gap) * j;

        drawBlackSquare(context, { x, y, w, h });
        drawRandomRedSquare(context, { x, y, w, h });
      }
    }
  };

  return <Canvas draw={drawSquares} />;
};
