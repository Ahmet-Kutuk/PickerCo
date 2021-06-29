import React, { useState } from 'react';
import '../../Styles/Compoments/Try/Try.scss';
import Winner from './Winner';
function Picker() {
  const [isOpen, setIsOpen] = useState(false);

  const rePick = () => {
    return setIsOpen(false);
  };
  return (
    <>
      <div className="flex try-section justify-center lg:p-3 mt-4 lg:mt-10 mb-10">
        <form className="picker-form flex flex-col justify-center items-center md:flex-row">
          <input
            type="text"
            placeholder="Example Youtube ID = 5-MT5zeY6CU"
            className="rounded-lg px-2 picker-input py-5 outline-none placeholder-blue-500 "
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(true);
            }}
            className="bg-blue-500 w-48 py-5 mt-5 lg:mt-0 rounded-lg text-white lg:ml-10"
          >
            Pick
          </button>
        </form>
      </div>
      <Winner rePick={rePick} open={isOpen} />
    </>
  );
}

export default Picker;
