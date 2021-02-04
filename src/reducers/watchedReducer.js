import { ADD_TO_WATCHED } from "../actions/types";

const initialState = [];

const watchedReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WATCHED:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default watchedReducer;
