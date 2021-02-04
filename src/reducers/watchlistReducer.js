import { ADD_TO_WATCHLIST } from "../actions/types";

const initialState = [];

const watchlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WATCHLIST:
      return [...state, action.payload]; // what if already in watchlist ??
    default:
      return state;
  }
};

export default watchlistReducer;
