import { ADD_TO_WATCHLIST, DELETE_FROM_WATCHLIST } from "../actions/types";

const initialState = [];

const watchlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WATCHLIST:
      return [...state, action.payload];

    case DELETE_FROM_WATCHLIST:
      return state.filter((movie) => movie.id !== action.payload);
    default:
      return state;
  }
};

export default watchlistReducer;
