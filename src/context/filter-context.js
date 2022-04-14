import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducers/filterReducer";

const FilterContext = createContext();

const useFilter = () => useContext(FilterContext);

const FilterContextProvider = ({children}) => {

    const [filterState, filterDispatch] = useReducer(filterReducer, {
        byCategory: []
    })
    return <FilterContext.Provider value={{filterState, filterDispatch}}>{children}</FilterContext.Provider>
}

export {useFilter, FilterContextProvider};