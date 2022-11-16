import React from "react";

const Ayah = ({ ayahAr, arti, sound }) => {
  return (
    <div className="w-full flex flex-row py-8 border-b border-white gap-8">
      <div className="flex flex-col items-center justify-center">
        <button>{sound}</button>
      </div>
      <div className="w-full flex flex-col gap-5 ">
        <p className="flex flex-col items-end text-2xl">{ayahAr}</p>
        <p className="text-white">{arti}</p>
      </div>
    </div>
  );
};

export default Ayah;
