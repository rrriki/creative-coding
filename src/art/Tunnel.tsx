import React from "react";
import { Canvas, CanvasDrawingProps } from "../components";
import { degreesToRadians, randomInRange } from "../utils";

export const Tunnel: React.FC = () => {
  const drawTunnel = ({ context, height, width }: CanvasDrawingProps) => {
    context.beginPath();

    // background
    context.rect(0, 0, width, height);
    context.fillStyle = "black";
    context.fill();

    const cx = width * 0.5;
    const cy = height * 0.5;
    const w = width * 0.01;
    const h = height * 0.1;

    const circleRadius = width * 0.3;
    const numberOfSlices = 13;

    for (let i = 0; i < numberOfSlices; i++) {
      const slice = degreesToRadians(360 / numberOfSlices);
      const sliceAngle = slice * i;
      context.save();
      const x = cx + circleRadius * Math.sin(sliceAngle);
      const y = cy + circleRadius * Math.cos(sliceAngle);
      // Draw depth lines
      context.translate(x, y);
      context.rotate(-sliceAngle);

      context.beginPath();
      const lineThickness = w * randomInRange(0.1, 3);
      const lineLength = h * randomInRange(0.1, 5);
      context.rect(-w * 2, -h * 2, lineThickness, lineLength);
      context.fillStyle = "white";

      context.fill();
      context.restore();

      // // Draw tunnel arcs
      context.save();
      context.translate(cx, cy);
      context.rotate(-sliceAngle);
      context.beginPath();

      const arcRadius =
        i * randomInRange(0.1, 5) + randomInRange(w * 2, circleRadius);
      const arcStartAngle = slice * -0.5;
      const arcEndAngle = slice * 5;
      context.arc(0, 0, arcRadius, arcStartAngle, arcEndAngle);

      context.strokeStyle = "white";
      context.lineWidth = randomInRange(1, 10);
      context.stroke();
      context.restore();
    }
  };

  return <Canvas draw={drawTunnel} />;
};
