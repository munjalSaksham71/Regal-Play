import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "FilterSlice",
  initialState: {
    byCategory: [],
  },
  reducers: {
    addCategory: (state, action) => {
      state.byCategory = [...state.byCategory, action.payload];
    },
    removeCategory: (state, action) => {
      state.byCategory = state.byCategory.filter(
        (category) => category !== action.payload
      );
    },
    clearAllCategory: (state) => {
      state.byCategory = [];
    },
  },
});

export const { addCategory, removeCategory, clearAllCategory } =
  filterSlice.actions;
export default filterSlice.reducer;
