import { FETCH_MOVIES } from "../actions/types";

const initalState = [];

const searchReducer = (state = initalState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return action.payload;
    default:
      return state;
  }
};

export default searchReducer;
