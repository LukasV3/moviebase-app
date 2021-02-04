import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import watchlistReducer from "./watchlistReducer";
import watchedReducer from "./watchedReducer";

export default combineReducers({
  search: searchReducer,
  watchlist: watchlistReducer,
  watched: watchedReducer,
});
