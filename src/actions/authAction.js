import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const Login = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    try {
      const {data} = await axios.post(
        "/api/auth/login",
        {
          email,
          password,
        },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      return data;
    } catch (error) {
      console.error(error.response);
    }
  }
);

export const Signup = createAsyncThunk(
  "auth/signup",
  async ({ email, password }) => {
    try {
      const {data} = await axios.post(
        "/api/auth/signup",
        {
          email,
          password,
        },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      return data;
    } catch (error) {
      console.error(error.response);
    }
  }
);