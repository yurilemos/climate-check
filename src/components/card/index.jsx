import React from 'react';
import { CardComponent } from './style.js';

const Card = ({children}) => {
  return (
    <CardComponent>
      {children}
    </CardComponent>
  );
};

export default Card;