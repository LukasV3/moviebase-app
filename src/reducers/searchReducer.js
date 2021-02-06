import { FETCH_MOVIES, CLEAR_FETCHED_MOVIES } from "../actions/types";

const initalState = [];

const searchReducer = (state = initalState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return action.payload;
    case CLEAR_FETCHED_MOVIES:
      return [];
    default:
      return state;
  }
};

export default searchReducer;
