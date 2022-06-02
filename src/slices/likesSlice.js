import { createSlice } from "@reduxjs/toolkit";
import {
  AddToLikes,
  DeleteFromLikes,
  GetLikes,
} from "../actions/likeVideoAction";

export const likesSlice = createSlice({
  name: "LikesSlice",
  initialState: {
    likedVideos: [],
    likedVideosLoading: false,
    likedVideosError: null,
  },
  extraReducers: {
    [GetLikes.pending]: (state, action) => {
      state.likedVideosLoading = true;
    },
    [GetLikes.fulfilled]: (state, action) => {
      state.likedVideosLoading = false;
      state.likedVideos = action.payload;
    },
    [GetLikes.rejected]: (state, action) => {
      state.likedVideosLoading = false;
      state.likedVideosError = "Something Went Wrong!!";
    },
    [AddToLikes.pending]: (state, action) => {
      state.likedVideosLoading = true;
    },
    [AddToLikes.fulfilled]: (state, action) => {
      state.likedVideosLoading = false;
      state.likedVideos = action.payload;
    },
    [AddToLikes.rejected]: (state, action) => {
      state.likedVideosLoading = false;
      state.likedVideosError = "Something Went Wrong!!";
    },
    [DeleteFromLikes.pending]: (state, action) => {
      state.likedVideosLoading = true;
    },
    [DeleteFromLikes.fulfilled]: (state, action) => {
      state.likedVideosLoading = false;
      state.likedVideos = action.payload;
    },
    [DeleteFromLikes.rejected]: (state, action) => {
      state.likedVideosLoading = false;
      state.likedVideosError = "Something Went Wrong!!";
    },
  },
});

export default likesSlice.reducer;
