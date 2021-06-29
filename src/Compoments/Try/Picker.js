import React, { useState } from 'react';
import '../../Styles/Compoments/Try/Try.scss';
import Winner from './Winner';
import Comments from '../../utils/getComment';
function Picker() {
  const [isOpen, setIsOpen] = useState(false);
  const [videoId, setVideoId] = useState('');
  const [allComments, setAllComments] = useState([]);

  const rePick = () => {
    return setIsOpen(false);
  };
  const handleChange = (e) => {
    return setVideoId(e.target.value);
  };
  const getComments = () => {
    setTimeout(() => {
      // eslint-disable-next-line no-unused-vars
      const data = Comments(videoId).then((data) =>
        setAllComments(data.data.items)
      );
    }, 6000);
  };
  return (
    <>
      <div className="flex try-section justify-center lg:p-3 mt-4 lg:mt-10 mb-10">
        <form className="picker-form flex flex-col justify-center items-center md:flex-row">
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder="Example Youtube ID = 5-MT5zeY6CU"
            className="rounded-lg px-2 picker-input py-5 outline-none placeholder-blue-500 "
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              getComments();
              setIsOpen(true);
            }}
            className="bg-blue-500 w-48 py-5 mt-5 lg:mt-0 rounded-lg text-white lg:ml-10"
          >
            Pick
          </button>
        </form>
      </div>
      <Winner allComments={allComments} rePick={rePick} open={isOpen} />
    </>
  );
}

export default Picker;
