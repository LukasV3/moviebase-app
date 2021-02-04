import { FETCH_MOVIES } from "./types";
import movies from "../apis/theMovieDatabase";

export const fetchMovies = (query) => {
  return async (dispatch) => {
    const res = await movies.get(`/${query.replaceAll(" ", "+")}`);

    dispatch({
      type: FETCH_MOVIES,
      payload: res.data.results,
    });
  };
};
