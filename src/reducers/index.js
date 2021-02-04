import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import watchlistReducer from "./watchlistReducer";

export default combineReducers({
  search: searchReducer,
  watchlist: watchlistReducer,
});
