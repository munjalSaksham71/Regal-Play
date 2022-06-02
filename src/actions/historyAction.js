import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetHistory = createAsyncThunk("history/get", async () => {
  const token = localStorage.getItem("token");
  try {
    const { data } = await axios.get("/api/user/history", {
      headers: {
        authorization: token,
      },
    });
    return data.history;
  } catch (error) {
    console.error(error.response);
  }
});

export const AddToHistory = createAsyncThunk(
  "history/addVideo", 
  async ( video ) => {
    const token = localStorage.getItem("token");
    try {
      const { data } = await axios.post("/api/user/history", { video }, {
        headers: {
          authorization: token,
        },
      });
      return data.history;
    } catch (error) {
      console.error(error.response);
    }
  }
)

export const DeleteFromHistory = createAsyncThunk(
  "history/deleteVideo", 
  async (id) => {
    const token = localStorage.getItem("token");
    try {
      const { data } = await axios.delete(`/api/user/history/${id}`, {
        headers: {
          authorization: token,
        },
      });
      return data.history;
    } catch (error) {
      console.error(error.response);
    }
  }
)

export const ClearAllHistory = createAsyncThunk(
  "history/clearAll", 
  async () => {
    const token = localStorage.getItem("token");
    try {
      const { data } = await axios.delete(`/api/user/history/all`, {
        headers: {
          authorization: token,
        },
      });
      return data.history;
    } catch (error) {
      console.error(error.response);
    }
  }
)

