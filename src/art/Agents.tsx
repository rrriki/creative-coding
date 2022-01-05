import React from "react";
import { Canvas, CanvasDrawingProps } from "../components";
import { Agent, randomHexColor, randomInRange } from "../utils";

export const Agents: React.FC = () => {
  const drawAgents = ({ context, width, height }: CanvasDrawingProps) => {
    const agentsCount = 40;

    for (let i = 0; i <= agentsCount; i++) {
      const radius = randomInRange(1, 13);
      const agent = new Agent(0, 0, radius);

      agent.setStrokeColor(randomHexColor());
      agent.setFillColor(randomHexColor());
      agent.setLineWidth(randomInRange(1, 5));
      const x = randomInRange(0, width);
      const y = randomInRange(0, height);
      agent.updatePosition({x, y});

      agent.draw(context);
    }
  };

  return <Canvas draw={drawAgents} animate={true} />;
};
