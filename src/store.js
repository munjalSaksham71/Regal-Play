import { configureStore } from "@reduxjs/toolkit";
import historySlice from "./slices/historySlice";
import videoSlice from "./slices/videoSlice";
import watchLaterSlice from "./slices/watchLaterSlice";
import likesSlice from "./slices/likesSlice";
import playlistSlice from "./slices/playlistSlice";
import authSlice from "./slices/authSlice";
import filterSlice  from "./slices/filterSlice";

const store = configureStore({
  reducer: {
    video: videoSlice,
    watchlater: watchLaterSlice,
    history: historySlice, 
    likes: likesSlice, 
    playlist: playlistSlice, 
    auth: authSlice, 
    filter: filterSlice
  },
});

export default store;
