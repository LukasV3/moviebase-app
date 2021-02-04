import axios from "axios";

export default axios.create({
  baseURL: `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&query=`,
});
