import React from 'react';
import Item1 from '../../Assets/about-item-1.svg';
import Item2 from '../../Assets/about-item-2.svg';
import Item3 from '../../Assets/about-item-3.svg';
import Item4 from '../../Assets/about-item-4.svg';
function Cards() {
  return (
    <>
      <div className="about-section flex flex-col md:flex-row mt-10 justify-center ml-3 mb-10">
        <div className="card about w-96  h-96 flex items-center flex-col p-2">
          <img src={Item1} alt="about-item1" />
          <h4 className="text-blue-900 font-bold text-2xl mt-8">
            Whats Comment Picker?
          </h4>
          <p className="text-blue-900 font-light mt-8 text-lg px-2">
            PickerCo helps you randomly choose from free comments of youtube
            videos. This project is open source. You can help develop it.
          </p>
        </div>
        <div className="card about mt-10 lg:mt-0 lg:ml-10 w-96 h-96 flex items-center flex-col p-2">
          <img src={Item2} className="w-40" alt="about-item1" />
          <h4 className="text-blue-900 font-bold text-2xl mt-8">
            Whats Open Source Project?
          </h4>
          <p className="text-blue-900 font-light mt-8 text-lg px-2">
            It provides an environment where you can develop open source
            projects together. So we can become a community.
          </p>
        </div>
        <div className="card about mt-10 lg:mt-0 lg:ml-10 w-96 h-96 flex items-center flex-col p-2">
          <img src={Item3} alt="about-item1" />
          <h4 className="text-blue-900 font-bold text-2xl mt-8">
            How does PickerCo work?
          </h4>
          <p className="text-blue-900 font-light mt-8 text-lg px-2">
            You can choose a random comment by entering the youtube id of the
            youtube video you want in the relevant field.
          </p>
        </div>
        <div className="card about mt-10 lg:mt-0 lg:ml-10 w-96 h-96 flex items-center flex-col p-2">
          <img src={Item4} className="w-52" alt="about-item1" />
          <h4 className="text-blue-900 font-bold text-2xl mt-8">
            Whats Youtube Video URL?
          </h4>
          <p className="text-blue-900 font-light mt-8 text-lg px-2">
            Youtube url is the youtube video link in your search field. Example
            Youtube URL = "https://www.youtube.com/watch?v=5-MT5zeY6CU"
          </p>
        </div>
      </div>
    </>
  );
}

export default Cards;
