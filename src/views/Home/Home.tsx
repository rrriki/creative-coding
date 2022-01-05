import React from "react";
import styled from "styled-components";
import { CardGrid } from "../../components";
import { Squares, Tunnel } from "../../art";

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
  ];
  return (
    <div>
      <Title>Creative Coding</Title>
      <CardGrid cards={cards} />
    </div>
  );
};
