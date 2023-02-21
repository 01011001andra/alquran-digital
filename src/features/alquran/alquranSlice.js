import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../../pages";

const initialState = {
  loading: true,
  data: [],
  error: "",
};

export const fetchDataQuran = createAsyncThunk("alQuran/fetchDataQuran", () => {
  return axios
    .get(`${api}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.message;
    });
});

const alQuranSlice = createSlice({
  name: "alQuran",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchDataQuran.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchDataQuran.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchDataQuran.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.payload;
    });
  },
});

export default alQuranSlice.reducer;
