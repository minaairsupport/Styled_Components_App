import React from 'react';
import { StyledCard } from './styles/Card.styled';

import { Image } from './styles/Header.styled';

interface CardProps {
  id: number;
  title: string;
  body: string;
  image: string;
}
function Card(item: CardProps) {
  return (
    <div>
      <StyledCard layout={item.id % 2 === 0 ? 'row-reverse' : ''}>
        <div>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
        <div>
          <img src={`./images/${item.image}`} alt={item.title} />
        </div>
      </StyledCard>
    </div>
  );
}

export default Card;
