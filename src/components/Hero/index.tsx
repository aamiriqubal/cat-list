import React, { FunctionComponent } from 'react';
import './Hero.scss'
import Button from '../Button';

interface HeroProps {
  onClick: () => void,
}

const Hero: FunctionComponent<HeroProps> = ({ onClick }) => {
  return (
    <div className="cat-app-hero">
      <div className="cat-app-hero__container">
        <div className="cat-app-hero__text">
          <h1>Hi, I am Aamir Iqubal</h1>
          <p>And I'm a Developer</p>
        </div>
        <div className="cat-app-hero__button-container">
          <h1>Wanna see demo?</h1>
          <Button onClick={onClick} text='Click here!' />
        </div>
      </div>
    </div>
  )
};

export default Hero;