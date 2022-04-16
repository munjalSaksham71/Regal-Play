import { createContext, useContext, useReducer } from "react";
import { initialLikedState, likeReducer } from "../reducers/likeReducer";

const LikesContext = createContext();

const useLikes = () => useContext(LikesContext);

const LikesContextProvider = ({children}) => {

    const [likeState, likeDispatch] = useReducer(likeReducer, initialLikedState);

    return <LikesContext.Provider value={{likeState, likeDispatch}}>{children}</LikesContext.Provider>
}

export {useLikes, LikesContextProvider};