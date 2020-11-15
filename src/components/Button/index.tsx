import React from 'react';
import './Button.scss';

interface ButtonProps {
  type?: string,
  text?: string,
  onClick: () => void,
  small?: Boolean,
}

const Button = ({ type = 'default', text='CLICK ME', onClick, small }: ButtonProps ) => {
  const svgWidth = small ? 99 : 179;
  const svgHeight = small ? 88 : 48;
  const width = small ? 100 : 180;
  const height = small ? 30 : 50;
  return (
    <button className={`btn btn-${type} ${small ? 'btn-small' : 'btn-norm'}`} onClick={onClick}>
      <svg width={`${width}px`} height={`${height}`} viewBox={`0 0 ${svgWidth} 50`} className="border">
        <polyline points={`${svgWidth},1 ${svgWidth},${svgHeight} 1,${svgHeight} 1,1 ${svgWidth},1`} className="bg-line" />
        <polyline points={`${svgWidth},1 ${svgWidth},${svgHeight} 1,${svgHeight} 1,1 ${svgWidth},1`} className="hl-line" />
      </svg>
      <span className="btn__text">{text}</span>
    </button>
  );
}
export default Button;