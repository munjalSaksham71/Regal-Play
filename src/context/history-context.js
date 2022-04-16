import { createContext, useContext, useReducer } from "react";
import { historyReducer, initalHistoryState } from "../reducers/historyReducer";

const HistoryContext = createContext();

const useHistory = () => useContext(HistoryContext);

const HistoryContextProvider = ({children}) => {

    const [historyState, historyDispatch] = useReducer(historyReducer, initalHistoryState);

    return <HistoryContext.Provider value={{historyState, historyDispatch}}>{children}</HistoryContext.Provider>
}

export {useHistory, HistoryContextProvider};