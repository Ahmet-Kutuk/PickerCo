import React from 'react';

function Menu() {
  return (
    <div className="flex mt-6 mr-4 md:mt-9 self-end lg:mr-48 ">
      <div className="menu justify-self-end" style={{ color: '#1F3F68' }}>
        <a href="#about" className="mr-7">
          About
        </a>
        <a href="#try" className="mr-7">
          Try
        </a>
        <a href="#contact" className="">
          Contact
        </a>
      </div>
    </div>
  );
}

export default Menu;
