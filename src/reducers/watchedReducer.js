import { ADD_TO_WATCHED, DELETE_FROM_WATCHED } from "../actions/types";

const initialState = [];

const watchedReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WATCHED:
      return [...state, action.payload];
    case DELETE_FROM_WATCHED:
      return state.filter((movie) => movie.id !== action.payload);
    default:
      return state;
  }
};

export default watchedReducer;
