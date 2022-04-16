import { createContext, useContext, useReducer } from "react";
import { initialWatchlistState, watchlistReducer } from "../reducers/watchlistReducer";


const WatchlistContext = createContext();

const useWatchlist = () => useContext(WatchlistContext);

const WatchlistContextProvider = ({children}) => {

    const [watchlistState, watchlistDispatch] = useReducer(watchlistReducer, initialWatchlistState);

    return <WatchlistContext.Provider value={{watchlistState, watchlistDispatch}}>{children}</WatchlistContext.Provider>
}

export {useWatchlist, WatchlistContextProvider};