import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetPlaylist = createAsyncThunk("playlist/getPlaylist", async () => {
  const token = localStorage.getItem("token");
  if(!token) {
    throw new Error(alert("Please Login First"))
  }
  try {
    const { data } = await axios.get("/api/user/playlists", {
      headers: {
        authorization: token,
      },
    });
    return data.playlists;
  } catch (error) {
    console.error(error.response);
  }
});

export const AddPlaylist = createAsyncThunk(
  "playlist/addPlaylist",
  async (playlist) => {
    const token = localStorage.getItem("token");
    if(!token) {
      throw new Error(alert("Please Login First"))
    }
    try {
      const { data } = await axios.post(
        "/api/user/playlists",
        { playlist: playlist },
        {
          headers: {
            authorization: token,
          },
        }
      );
      return data.playlists;
    } catch (error) {
      console.error(error.response);
    }
  }
);

export const DeletePlaylist = createAsyncThunk(
  "playlist/deletePlaylist",
  async (id) => {
    const token = localStorage.getItem("token");
    if(!token) {
      throw new Error(alert("Please Login First"))
    }
    try {
      const { data } = await axios.delete(`/api/user/playlists/${id}`, {
        headers: {
          authorization: token,
        },
      });
      return data.playlists;
    } catch (error) {
      console.error(error.response);
    }
  }
);

export const AddVideoToPlaylist = createAsyncThunk(
  "playlist/addVideo",
  async ({playlistId, video}) => {
    const token = localStorage.getItem("token");
    if(!token) {
      throw new Error(alert("Please Login First"))
    }
    try {
      const { data } = await axios.post(
        `/api/user/playlists/${playlistId}`,
        {
          video,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      console.log(data)
      return data.playlist;
    } catch (error) {
      console.log(error);
    }
  }
);

export const DeleteVideoFromPlaylist = createAsyncThunk(
  "playlist/deleteVideo",
  async ({playlistId, videoId}) => {
    const token = localStorage.getItem("token");
    if(!token) {
      throw new Error(alert("Please Login First"))
    }
    try {
      const { data } = await axios.delete(
        `/api/user/playlists/${playlistId}/${videoId}`,
        {
          headers: {
            authorization: token,
          },
        }
      );
      return data.playlist;
    } catch (error) {
      console.log(error);
    }
  }
);
