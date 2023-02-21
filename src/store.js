import { configureStore } from "@reduxjs/toolkit";
import alquranSlice from "./features/alquran/alquranSlice";
import surahSlice from "./features/alquran/surahSlice";

const store = configureStore({
  reducer: {
    alQuran: alquranSlice,
    surah: surahSlice,
  },
});

export default store;
