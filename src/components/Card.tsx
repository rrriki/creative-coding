import React from "react";
import styled from "styled-components";

export interface CardProps {
  title: string;
  description: string;
  canvas: JSX.Element;
}
export const Card: React.FC<CardProps> = (props) => {
  const { title, description, canvas } = props;

  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 5px 5px 10px #333;
    border-radius: 5px 5px;
    height: 500px;
    width: 400px;
  `;

  const Art = styled.div`
    height: 400px;
  `;

  const Details = styled.div`
    padding: 8px;
    height: 100px;

    > h2 {
      margin: 0;
      margin-bottom: 4px;
    }
    > p {
      margin: 0;
      color: #999999;
    }
  `;

  return (
    <Wrapper id="card">
      <Art id="art">{canvas}</Art>
      <Details id="details">
        <h2>{title}</h2>
        <p>{description}</p>
      </Details>
    </Wrapper>
  );
};
