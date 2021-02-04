import React, { useState } from "react";
import { fetchMovies } from "../../actions";
import "../scss/Search.scss";
import ResultsCard from "./ResultsCard";
import { connect } from "react-redux";

const Search = (props) => {
  const [term, setTerm] = useState("");
  const [searchDebounce, setSearchDebounce] = useState(null);

  const searchTerm = (value) => {
    props.fetchMovies(value);
  };

  const onInputChange = (e) => {
    setTerm(e.target.value);

    setSearchDebounce(clearInterval(searchDebounce));
    setSearchDebounce(setTimeout(() => searchTerm(e.target.value), 500));
  };

  const renderSearchResults = () => {
    if (props.movies.length === 0) return;

    return props.movies.map((movie) => {
      console.log(movie);
      return (
        <ResultsCard
          title={movie.title}
          releaseDate={movie.release_date}
          imgageSrc={movie.poster_path}
          id={movie.id}
          key={movie.id}
        />
      );
    });
  };

  return (
    <div className="search">
      <input
        onChange={(e) => onInputChange(e)}
        value={term}
        type="text"
        placeholder="Search movie..."
        className="search__input"
      />
      <div className="search__results">{renderSearchResults()}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.search,
  };
};

export default connect(mapStateToProps, { fetchMovies })(Search);
