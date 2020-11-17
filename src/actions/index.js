export const setFavorites = (payload) => ({
  type: "SET_FAVORITES",
  payload,
});

export const deleteFavorite = (payload) => ({
  type: "DELETE_FAVORITE",
  payload,
});
