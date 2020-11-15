import React from 'react';
import './Header.scss';
import profileImage from '../../assets/images/profile.svg'

interface HeaderProps {
  onClickHome: () => void,
}

const Header = ({onClickHome}: HeaderProps) => {
  return (
    <header className="cat-app-header">
      <img className="cat-app-header__icon" src={profileImage} onClick={onClickHome}/>
      <div className="cat-app-header__text--right"></div>
    </header>
  );
}

export default Header;