import React from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
const Card = ({
  to,
  namaSurahId,
  artiSurah,
  no,
  namaSurahAr,
  totalAyahs,
  tafsir,
}) => {
  return (
    <div className="flex flex-row items-center card w-full xl:w-[365px] bg-[#1F2125] border border-gray-500 shadow-xl rounded-md hover:border-blue-700 transition-all duration-500 group px-2">
      <Link
        to={to}
        className="flex flex-row items-center justify-between w-full"
      >
        <div className="h-full flex flex-row items-center">
          <h2 className="w-12 h-12 bg-base-200 rounded-full flex items-center justify-center font-bold group-hover:text-yellow-500 transition-all duration-500">
            {no}
          </h2>
          <div className="card-body p-5">
            <h2 className="card-title text-base text-white">{namaSurahId}</h2>
            <p className="group-hover:text-blue-700 text-sm transition-all duration-500">
              {artiSurah}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 mr-2">
          <h2 className="text-white">{namaSurahAr}</h2>
          <small className="group-hover:text-blue-700 flex flex-col items-end transition-all duration-500">
            {totalAyahs}
          </small>
        </div>
      </Link>
      <label className="cursor-pointer mx-2">
        <Modal namaSurahId={namaSurahId} tafsir={tafsir} />
      </label>
      {/* Put this part before </body> tag
      <input
        type="checkbox"
        id="my-modal-4"
        className="modal-toggle bg-transparent"
      />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative " htmlFor="">
          <h3 className="text-lg font-bold bg-transparent">
            Tafsir Surah {namaSurahId}
          </h3>
          <p className="py-4 bg-transparent">{tafsir}</p>
        </label>
      </label> */}
    </div>
  );
};

export default Card;
