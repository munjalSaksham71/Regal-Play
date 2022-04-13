import axios from "axios";
import {createContext, useContext, useEffect, useReducer } from "react";
import { getVideos } from "../actions/videoAction";
import { videoListReducer } from "../reducers/productReducer";

const VideoContext = createContext();

const VideoContextProvider = ({children}) => {

    useEffect(() => {
        getVideos()(videoDispatch);
    }, [])

    const [videoState, videoDispatch] = useReducer(videoListReducer, {
        loading: true,
        videos: [],
        error: ''
    })

    return <VideoContext.Provider value={{videoState, videoDispatch}}>{children}</VideoContext.Provider>
}

const useVideo = () => useContext(VideoContext);

export {useVideo, VideoContextProvider}