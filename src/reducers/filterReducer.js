export const filterReducer = (state, action) => {
  switch (action.type) {
    case "BY_CATEGORY":
      return { ...state, byCategory: [...state.byCategory, action.payload] };
    case "CLEAR_ALL":
      return { byCategory: [] };
    default:
      return { ...state };
  }
};
