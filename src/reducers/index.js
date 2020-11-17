const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FAVORITES":
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
    case "DELETE_FAVORITE": {
      const lista = state.myList.filter((items) => items.id !== action.payload);
      return {
        ...state,
        myList: lista,
      };
    }

    default:
      return state;
  }
};

export default reducer;
