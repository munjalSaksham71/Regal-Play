export const initalHistoryState = {
    historyVideos: [],
  };
  
  export const historyReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_HISTORY":
        return { ...state, historyVideos: [...state.historyVideos, action.payload] };
      case "REMOVE_FROM_HISTORY":
        return {
          ...state,
          historyVideos: [
            ...state.historyVideos.filter((item) => item.id !== action.payload)
          ],
        };
      default:
        return state;
    }
  };
  