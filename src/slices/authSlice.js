import { createSlice } from "@reduxjs/toolkit";
import { Login, Signup } from "../actions/authAction";

const token = localStorage.getItem("token");

export const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    isUserLoggedIn: token ? true : false,
    user: token,
  },
  reducers: {
    Logout: (state) => {
      (state.isUserLoggedIn = false), (state.user = null);
      localStorage.removeItem("token");
    },
  },
  extraReducers: {
    [Login.fulfilled]: (state, action) => {
      state.isUserLoggedIn = true;
      state.user = action.payload.foundUser;
      localStorage.setItem(
        "token",
        JSON.stringify(action.payload.encodedToken)
      );
    },
    [Signup.fulfilled]: (state, action) => {
      state.isUserLoggedIn = true;
      state.user = action.payload.createdUser;
      localStorage.setItem(
        "token",
        JSON.stringify(action.payload.encodedToken)
      );
    },
  },
});

export const { Logout } = authSlice.actions;

export default authSlice.reducer;
