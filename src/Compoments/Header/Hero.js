import React from 'react';
import Ils from '../../Assets/hero-illustration.svg';
// import Rect from '../../Assets/Hero-rectangle.svg';
function Hero() {
  return (
    <div className=" lg:mt-16 mt-9 p-7 flex flex-col lg:flex-row">
      <div className="flex ml-5 lg:ml-0 lg:w-1/2 flex-col align-middle lg:mt-32">
        <h1 className="font-bold w-96 text-blue-900 lg:text-5xl">
          New Youtube Comment Picker
        </h1>
        <p className="font-light mt-6  text-blue-900 lg:mt-12">
          a free tool that provides picks from comments on youtube videos. It is
          open source code. You can improve and contribute.
        </p>
        <button className="bg-blue-500 w-64 p-4 rounded-lg mt-8 text-white lg:mt-16">
          Try Free
        </button>
      </div>
      <img className=" mt-12 lg:ml-28 lg:mt-0" src={Ils} alt="hero" />
    </div>
  );
}

export default Hero;
