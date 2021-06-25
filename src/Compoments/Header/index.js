import React from 'react';
import '../../Styles/Compoments/Hero/hero.scss';
import Hero from './Hero';
import Menu from './Menu';
function Header() {
  return (
    <div className="header-section flex flex-col items-center overflow-hidden  bg-white">
      <Menu />
      <Hero />
    </div>
  );
}

export default Header;
