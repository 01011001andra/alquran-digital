import React, { Fragment, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { BiSearchAlt } from "react-icons/bi";
import { Card } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataQuran } from "../../features/alquran/alquranSlice";

const Home = () => {
  // state
  const [nameSurah, setNameSurah] = useState("");

  const dispatch = useDispatch();
  const dataQuran = useSelector((state) => {
    return state.alQuran;
  });
  const surah = dataQuran.data.data;
  const loading = dataQuran.loading;

  useEffect(() => {
    dispatch(fetchDataQuran());
  }, []);

  if (loading) {
    return (
      <>
        {/* Helmet */}
        <Helmet>
          <meta charSet="utf-8" />
          <title>AlQuran</title>
          <link
            rel="icon"
            href="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Quran_Kareem.svg/200px-Quran_Kareem.svg.png"
          />
        </Helmet>
        {/* Hero Section */}
        <div
          className={`hero min-h-[75vh] bg-[url("https://images.unsplash.com/photo-1643860637088-7dac565e14d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80")] bg-cover`}
        >
          <div className="hero-content max-w-2xl w-full bg-transparent">
            <div className="w-full flex flex-col items-center gap-8 bg-transparent">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Quran_Kareem.svg/200px-Quran_Kareem.svg.png"
                alt="alquran"
                width={200}
                height={200}
                className="bg-transparent"
              />

              <div
                className="w-full bg-white h-16 full rounded-full px-6 text-xl
           flex flex-row gap-3 items-center"
              >
                <BiSearchAlt className="bg-transparent" />
                <input
                  type="text"
                  placeholder="Masukkan, Misal Al-Fatihah"
                  className="bg-transparent text-black w-full active:outline-none outline-none text-lg"
                  onChange={(e) => setNameSurah(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full min-h-screen gap-5 p-2">
          <h1 className="text-3xl font-semibold text-center w-full border-b-2 border-white p-3">
            LIST SURAH
          </h1>
          <div role="status" className="flex flex-col items-center py-10">
            <svg
              aria-hidden="true"
              class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      {/* Helmet */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>AlQuran</title>
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Quran_Kareem.svg/200px-Quran_Kareem.svg.png"
        />
      </Helmet>
      {/* Hero Section */}
      <div
        className={`hero min-h-[75vh] bg-[url("https://images.unsplash.com/photo-1643860637088-7dac565e14d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80")] bg-cover`}
      >
        <div className="hero-content max-w-2xl w-full bg-transparent">
          <div className="w-full flex flex-col items-center gap-8 bg-transparent">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Quran_Kareem.svg/200px-Quran_Kareem.svg.png"
              alt="alquran"
              width={200}
              height={200}
              className="bg-transparent"
            />

            <div
              className="w-full bg-white h-16 full rounded-full px-6 text-xl
           flex flex-row gap-3 items-center"
            >
              <BiSearchAlt className="bg-transparent" />
              <input
                type="text"
                placeholder="Masukkan, Misal Al-Fatihah"
                className="bg-transparent text-black w-full active:outline-none outline-none text-lg"
                onChange={(e) => setNameSurah(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      {/* List Surah */}
      <div className="flex flex-col max-w-6xl w-full min-h-screen mx-auto gap-2">
        <h1 className="text-3xl font-semibold text-center w-full border-b-2 border-white p-3">
          LIST SURAH
        </h1>
        <div className="w-full h-full flex flex-wrap gap-5 p-2">
          {surah
            .filter((val) => {
              if (nameSurah === "") {
                return val;
              } else if (
                val.asma.id.short
                  .toLowerCase()
                  .includes(nameSurah.toLowerCase())
              ) {
                return val;
              }
            })
            .map((item) => (
              <Fragment key={item.number}>
                <Card
                  to={`/${item.number}`}
                  namaSurahId={item.asma.id.short}
                  no={item.number}
                  totalAyahs={item.ayahCount}
                  artiSurah={item.asma.translation.id}
                  namaSurahAr={item.asma.ar.short}
                  tafsir={item.tafsir.id}
                />
              </Fragment>
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
