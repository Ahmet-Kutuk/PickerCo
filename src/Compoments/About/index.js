import React from 'react';
import '../../Styles/Compoments/About/About.scss';
import Cards from './Cards';

function About() {
  return (
    <>
      <div className="title md:ml-32 mt-10">
        <h2 className="font-bold text-blue-900 text-3xl ml-3 lg:ml-0  lg:text-4xl">
          About Of PickerCo
        </h2>
      </div>
      <Cards />
    </>
  );
}

export default About;
