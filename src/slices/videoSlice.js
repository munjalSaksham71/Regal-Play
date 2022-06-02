import { createSlice } from "@reduxjs/toolkit";
import { GetVideos } from "../actions/videoAction";

export const videoSlice = createSlice({
  name: "Videos",
  initialState: {
    videos: [],
    error: null,
    loading: false,
  },
  extraReducers: {
    [GetVideos.fulfilled]: (state, action) => {
      state.videos = action.payload;
      state.loading = false;
    },
    [GetVideos.pending]: (state, action) => {
      state.loading = true;
    },
    [GetVideos.rejected]: (state, action) => {
      console.log(action.payload);
      state.error = action.payload;
      state.videos = [];
      state.loading = false;
    },
  },
});

export default videoSlice.reducer;
