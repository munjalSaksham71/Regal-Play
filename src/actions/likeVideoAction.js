import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetLikes = createAsyncThunk("likes/get", async () => {
  const token = localStorage.getItem("token");
  if(!token) {
    throw new Error(alert("Please Login First"))
  }
  try {
    const { data } = await axios.get("/api/user/likes", {
      headers: {
        authorization: token,
      },
    });
    return data.likes;
  } catch (error) {
    console.error(error.response);
  }
});

export const AddToLikes = createAsyncThunk(
  "likes/addVideo", 
  async ( video ) => {
    const token = localStorage.getItem("token");
    if(!token) {
      throw new Error(alert("Please Login First"))
    }
    try {
      const { data } = await axios.post("/api/user/likes", { video }, {
        headers: {
          authorization: token,
        },
      });
      return data.likes;
    } catch (error) {
      console.error(error.response);
    }
  }
)

export const DeleteFromLikes = createAsyncThunk(
  "likes/deleteVideo", 
  async (id) => {
    const token = localStorage.getItem("token");
    if(!token) {
      throw new Error(alert("Please Login First"))
    }
    try {
      const { data } = await axios.delete(`/api/user/likes/${id}`, {
        headers: {
          authorization: token,
        },
      });
      return data.likes;
    } catch (error) {
      console.error(error.response);
    }
  }
)
