import { createSlice } from "@reduxjs/toolkit";
import {
  GetWatchLater,
  AddToWatchLater,
  DeleteFromWatchlater,
} from "../actions/watchLaterAction";

export const watchLaterSlice = createSlice({
  name: "WatchLaterSlice",
  initialState: {
    watchListVideos: [],
    watchlaterLoading: false,
    watchlaterError: null,
  },
  extraReducers: {
    [GetWatchLater.pending]: (state, action) => {
      state.watchlaterLoading = true;
    },
    [GetWatchLater.fulfilled]: (state, action) => {
      state.watchlaterLoading = false;
      state.watchListVideos = action.payload;
    },
    [GetWatchLater.rejected]: (state, action) => {
      state.watchlaterLoading = false;
      state.watchlaterError = "Something Went Wrong!!";
    },
    [AddToWatchLater.pending]: (state, action) => {
      state.watchlaterLoading = true;
    },
    [AddToWatchLater.fulfilled]: (state, action) => {
      state.watchlaterLoading = false;
      state.watchListVideos = action.payload;
    },
    [AddToWatchLater.rejected]: (state, action) => {
      state.watchlaterLoading = false;
      state.watchlaterError = "Something Went Wrong!!";
    },
    [DeleteFromWatchlater.pending]: (state, action) => {
      state.watchlaterLoading = true;
    },
    [DeleteFromWatchlater.fulfilled]: (state, action) => {
      state.watchlaterLoading = false;
      state.watchListVideos = action.payload;
    },
    [DeleteFromWatchlater.rejected]: (state, action) => {
      state.watchlaterLoading = false;
      state.watchlaterError = "Something Went Wrong!!";
    },
  },
});

export default watchLaterSlice.reducer;
