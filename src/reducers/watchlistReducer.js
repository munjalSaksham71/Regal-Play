export const initialWatchlistState = {
    watchListVideos: [],
  };
  
  export const watchlistReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_WATCHLIST":
        return { ...state, watchListVideos: action.payload };
      case "REMOVE_FROM_WATCHLIST":
        return { ...state, watchListVideos: action.payload };
      default:
        return state;
    }
  };
  