import React from "react";
import styled from "styled-components";
import { CardGrid } from "../../components";
import { Agents, Squares, Tunnel } from "../../art";

export const Home: React.FC = () => {
  const Title = styled.h1`
    color: #000;
  `;

  const cards = [
    {
      title: "Squares",
      description: "Squares grid with randomized red overlay.",
      canvas: <Squares />,
    },
    {
      title: "Tunnel",
      description: "Randomized arcs and lines, looking for a depth effect.",
      canvas: <Tunnel />,
    },
    {
      title: "Agents",
      description: "Drawing agents making random shit",
      canvas: <Agents />,
    },
  ];
  return (
    <div>
      <Title>Creative Coding</Title>
      <CardGrid cards={cards} />
    </div>
  );
};
