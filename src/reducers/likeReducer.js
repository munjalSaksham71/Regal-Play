export const initialLikedState = {
  likedVideos: [],
};

export const likeReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_LIKED":
      return { ...state, likedVideos: state.likedVideos.concat(action.payload) };
    case "REMOVE_FROM_LIKED":
      return {
        ...state,
        likedVideos: [
          ...state.likedVideos.filter((item) => item.id !== action.payload)
        ],
      };
    default:
      return state;
  }
};
