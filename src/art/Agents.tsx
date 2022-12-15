import React from "react";
import { CanvasDrawingProps } from "../components";
import { CanvasV2 } from "../components/CanvasV2";
import { Agent, randomHexColor, randomInRange } from "../utils";

export const Agents: React.FC = () => {
  const drawAgents = ({ context, width, height }: CanvasDrawingProps, frame: number) => {
    
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

  return <CanvasV2 draw={drawAgents} animate={true} />;
};
