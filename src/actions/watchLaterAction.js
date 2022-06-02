import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetWatchLater = createAsyncThunk("watchlater/get", async () => {
  const token = localStorage.getItem("token");
  try {
    const { data } = await axios.get("/api/user/watchlater", {
      headers: {
        authorization: token,
      },
    });
    return data.watchlater;
  } catch (error) {
    console.error(error.response);
  }
});

export const AddToWatchLater = createAsyncThunk(
  "watchlater/addVideo", 
  async ( video ) => {
    const token = localStorage.getItem("token");
    try {
      const { data } = await axios.post("/api/user/watchlater", { video }, {
        headers: {
          authorization: token,
        },
      });
      return data.watchlater;
    } catch (error) {
      console.error(error.response);
    }
  }
)

export const DeleteFromWatchlater = createAsyncThunk(
  "watchlater/deleteVideo", 
  async (id) => {
    const token = localStorage.getItem("token");
    try {
      const { data } = await axios.delete(`/api/user/watchlater/${id}`, {
        headers: {
          authorization: token,
        },
      });
      return data.watchlater;
    } catch (error) {
      console.error(error.response);
    }
  }
)
