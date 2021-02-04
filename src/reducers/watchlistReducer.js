import { ADD_TO_WATCHLIST, DELETE_FROM_WATCHLIST } from "../actions/types";

const initialState = [];

const watchlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WATCHLIST:
      return [...state, action.payload]; // what if already in watchlist ??

    case DELETE_FROM_WATCHLIST:
      return state.filter((movie) => movie.title !== action.payload);
    default:
      return state;
  }
};

export default watchlistReducer;
