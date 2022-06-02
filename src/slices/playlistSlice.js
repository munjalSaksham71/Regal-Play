import { createSlice } from "@reduxjs/toolkit";
import {
  AddPlaylist,
  AddVideoToPlaylist,
  DeletePlaylist,
  DeleteVideoFromPlaylist,
  GetPlaylist,
} from "../actions/addToPlaylistAction";

export const playlistSlice = createSlice({
  name: "PlaylistSlice",
  initialState: {
    playlists: [],
    playlistsLoading: false,
    playlistsError: null,
    isModalOpen: false,
  },
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
  },
  extraReducers: {
    [AddPlaylist.pending]: (state, action) => {
      state.playlistsLoading = true;
    },
    [AddPlaylist.fulfilled]: (state, action) => {
      state.playlistsLoading = false;
      state.playlists = action.payload;
    },
    [AddPlaylist.rejected]: (state, action) => {
      state.playlistsLoading = false;
      state.playlistsError = "Something Went Wrong!!";
    },
    [DeletePlaylist.pending]: (state, action) => {
      state.playlistsLoading = true;
    },
    [DeletePlaylist.fulfilled]: (state, action) => {
      state.playlistsLoading = false;
      state.playlists = action.payload;
    },
    [DeletePlaylist.rejected]: (state, action) => {
      state.playlistsLoading = false;
      state.playlistsError = "Something Went Wrong!!";
    },
    [GetPlaylist.pending]: (state, action) => {
      state.playlists = true;
    },
    [GetPlaylist.fulfilled]: (state, action) => {
      state.playlistsLoading = false;
      state.playlists = action.payload;
    },
    [GetPlaylist.rejected]: (state, action) => {
      state.playlistsLoading = false;
      state.playlistsError = "Something Went Wrong!!";
    },
    [AddVideoToPlaylist.pending]: (state, action) => {
      state.playlistsLoading = true;
    },
    [AddVideoToPlaylist.fulfilled]: (state, action) => {
      state.playlistsLoading = false;
      console.log(action.payload);
      state.playlists = state.playlists.map((video) =>
        video._id === action.payload._id
          ? {
              ...video,
              videos: action.payload.videos,
            }
          : video
      );
    },
    [AddVideoToPlaylist.rejected]: (state, action) => {
      state.playlistsLoading = false;
      state.playlistsError = "Something Went Wrong!!";
    },
    [DeleteVideoFromPlaylist.pending]: (state, action) => {
      state.playlistsLoading = true;
    },
    [DeleteVideoFromPlaylist.fulfilled]: (state, action) => {
      state.playlistsLoading = false;
      state.playlists = state.playlists.map((video) =>
        video._id === action.payload._id
          ? {
              ...video,
              videos: action.payload.videos,
            }
          : video
      );
    },
    [DeleteVideoFromPlaylist.rejected]: (state, action) => {
      state.playlistsLoading = false;
      state.playlistsError = "Something Went Wrong!!";
    },
  },
});

export const { openModal, closeModal } = playlistSlice.actions;

export default playlistSlice.reducer;
