const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FAVORITES": {
      //Verifica si ya existe ese podcast en la lista.
      const exist = state.myList.find((item) => item.id === action.payload.id);
      if (exist) {
        return { ...state };
      }

      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
    }
    case "DELETE_FAVORITE": {
      const lista = state.myList.filter((items) => items.id !== action.payload);
      return {
        ...state,
        myList: lista,
      };
    }

    case "LOGIN_REQUEST": {
      return {
        ...state,
        user: action.payload,
      };
    }

    case "LOGOUT_REQUEST": {
      return {
        ...state,
        user: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
