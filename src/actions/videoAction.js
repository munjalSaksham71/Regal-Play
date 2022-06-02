import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const GetVideos = createAsyncThunk(
    "videos/GetVideos", 
    async () =>  {
        try {
            const { data } =  await axios.get("/api/videos")
            return data.videos   
        } catch (error) {
            console.error(error);
        }
    }
)