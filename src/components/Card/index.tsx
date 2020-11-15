import React, { FunctionComponent } from 'react';
import './Card.scss';

interface CardProps {
  onClick?: () => void;
  className?: string;
}

const Card: FunctionComponent<CardProps> = ({
  onClick,
  children,
  className,
}) => {
  return (
    <div className={`card ${className ? className : ''}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;

interface CardsProps {}

export const Cards: FunctionComponent<CardsProps> = (props) => (
  <div className='cards-container'>{props.children}</div>
);
