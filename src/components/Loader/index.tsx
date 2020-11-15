import React, { FunctionComponent } from 'react';
import './Loader.scss';

interface LoaderProps {
  className?: string;
}

const Loader: FunctionComponent<LoaderProps> = ({ className }) => (
  <div className={`loader ${className ? className : ''}`}></div>
);

export default Loader;
