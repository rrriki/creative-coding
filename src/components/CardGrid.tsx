import React from "react";
import styled from "styled-components";
import { Card, CardProps } from ".";

interface CardGridProps {
  cards: CardProps[];
}

const Grid = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const GridItem = styled.div`
  display: flex;
  padding: 8px;
`;

export const CardGrid: React.FC<CardGridProps> = (props) => {
  const { cards } = props;
  return (
    <Grid id="card-grid">
      {cards.map((card, i) => (
        <GridItem key={i} className="card-grid-item">
          <Card {...card} />
        </GridItem>
      ))}
    </Grid>
  );
};
