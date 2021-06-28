import React from 'react';
import '../../Styles/Compoments/Try/Try.scss';
function Picker() {
  return (
    <>
      <div className="flex try-section justify-center lg:p-3 mt-4 lg:mt-10 mb-10">
        <form className="picker-form flex flex-col justify-center items-center md:flex-row">
          <input
            type="text"
            placeholder="Example Youtube ID = 5-MT5zeY6CU"
            className="rounded-lg px-2 picker-input py-5 outline-none placeholder-blue-500 "
          />
          <button className="bg-blue-500 w-48 py-5 mt-5 lg:mt-0 rounded-lg text-white lg:ml-10">
            Pick
          </button>
        </form>
      </div>
    </>
  );
}

export default Picker;
