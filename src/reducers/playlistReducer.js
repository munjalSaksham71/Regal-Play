export const playlistReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_PLAYLIST":
      return { ...state, playlists: action.payload };
    case "DELETE_PLAYLIST":
      return { ...state, playlists: action.payload };
    case "ADD_TO_PLAYLIST":
      return {
        ...state,
        playlists: state.playlists.map((video) =>
          video._id === action.payload._id
            ? {
                ...video,
                videos: action.payload.videos,
              }
            : video
        ),
      };
      case 'REMOVE_FROM_PLAYLIST':
        return {
            ...state,
            playlists: state.playlists.map((video) =>
              video._id === action.payload._id
                ? {
                    ...video,
                    videos: action.payload.videos,
                  }
                : video
            ),
          };
    default:
      return state;
  }
};
