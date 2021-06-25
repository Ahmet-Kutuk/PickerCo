import React from 'react';

function Menu() {
  return (
    <div className="flex mt-6 mr-4 md:mt-9 self-end lg:mr-52 ">
      <div className="menu justify-self-end" style={{ color: '#1F3F68' }}>
        <a href="sf" className="mr-7">
          About
        </a>
        <a href="dsf" className="mr-7">
          Try
        </a>
        <a href="sdf" className="">
          Contact
        </a>
      </div>
    </div>
  );
}

export default Menu;
