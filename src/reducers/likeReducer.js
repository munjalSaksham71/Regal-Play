export const initialLikedState = {
  likedVideos: [],
};

export const likeReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_LIKED":
      return { ...state, likedVideos: action.payload};
    case "REMOVE_FROM_LIKED":
      return { ...state, likedVideos: action.payload};
    default:
      return state;
  }
};
