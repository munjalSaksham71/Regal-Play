import { createSlice } from "@reduxjs/toolkit";
import {
  AddToHistory,
  ClearAllHistory,
  DeleteFromHistory,
  GetHistory,
} from "../actions/historyAction";

export const historySlice = createSlice({
  name: "HistorySlice",
  initialState: {
    historyVideos: [],
    historyLoading: false,
    historyError: null,
  },
  extraReducers: {
    [GetHistory.pending]: (state, action) => {
      state.historyLoading = true;
    },
    [GetHistory.fulfilled]: (state, action) => {
      state.historyLoading = false;
      state.historyVideos = action.payload;
    },
    [GetHistory.rejected]: (state, action) => {
      state.historyLoading = false;
      state.historyError = "Something Went Wrong!!";
    },
    [AddToHistory.pending]: (state, action) => {
      state.historyLoading = true;
    },
    [AddToHistory.fulfilled]: (state, action) => {
      state.historyLoading = false;
      state.historyVideos = action.payload;
    },
    [AddToHistory.rejected]: (state, action) => {
      state.historyLoading = false;
      state.historyError = "Something Went Wrong!!";
    },
    [DeleteFromHistory.pending]: (state, action) => {
      state.historyLoading = true;
    },
    [DeleteFromHistory.fulfilled]: (state, action) => {
      state.historyLoading = false;
      state.historyVideos = action.payload;
    },
    [DeleteFromHistory.rejected]: (state, action) => {
      state.historyLoading = false;
      state.historyError = "Something Went Wrong!!";
    },
    [ClearAllHistory.pending]: (state, action) => {
      state.historyLoading = true;
    },
    [ClearAllHistory.fulfilled]: (state, action) => {
      state.historyLoading = false;
      state.historyVideos = action.payload;
    },
    [ClearAllHistory.rejected]: (state, action) => {
      state.historyLoading = false;
      state.historyError = "Something Went Wrong!!";
    },
  },
});

export default historySlice.reducer;
