import { createContext, useContext, useReducer, useState } from "react";
import { playlistReducer } from "../reducers/playlistReducer";

const PlaylistContext = createContext();

const usePlaylist = () => useContext(PlaylistContext);


const PlaylistContextProvider = ({children}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const initialPlaylistState = {
        playlists: [],
    };

    const [playlistState, playlistDispatch] = useReducer(playlistReducer, initialPlaylistState)

    return <PlaylistContext.Provider value={{ playlistState, playlistDispatch, isModalOpen, setIsModalOpen}}>{children}</PlaylistContext.Provider>
}

export {PlaylistContextProvider, usePlaylist};