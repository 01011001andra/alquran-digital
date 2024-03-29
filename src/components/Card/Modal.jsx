import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import ReactTooltip from "react-tooltip";

export default function Modal({ namaSurahId, tafsir }) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => {
          setShowModal(!showModal);
        }}
      >
        <AiOutlineInfoCircle
          color="white"
          size={20}
          data-tip={`Tafsir Surah ${namaSurahId}`}
        />
        <ReactTooltip
          place="top"
          type="warning"
          effect="solid"
          className="overflow-y-hidden"
        />
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-transparent">
            <div className="relative w-auto my-6 mx-auto max-w-3xl  cursor-default">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-semibold mx-auto">
                    {namaSurahId}
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {tafsir}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="opacity-25 fixed inset-0 z-40 bg-black"
            onClick={() => setShowModal(!showModal)}
          ></div>
        </>
      ) : null}
    </>
  );
}
