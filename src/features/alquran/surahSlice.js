import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../../pages/utils";

const initialState = {
  loading: false,
  datas: [],
  error: "",
};

export const fetchDataSurah = createAsyncThunk("surah/fetchDataSurah", (id) => {
  return axios
    .get(`${api}/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.message;
    });
});

const surahSlice = createSlice({
  name: "surah",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchDataSurah.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchDataSurah.fulfilled, (state, action) => {
      state.loading = false;
      state.datas = action.payload;
      state.error = "";
    });
    builder.addCase(fetchDataSurah.rejected, (state, action) => {
      state.loading = false;
      state.datas = [];
      state.error = action.payload;
    });
  },
});

export default surahSlice.reducer;
