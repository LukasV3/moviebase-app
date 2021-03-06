import React from "react";
import { connect } from "react-redux";
import "../styles/Watched.scss";
import { deleteFromWatched, addToWatchlist } from "../../actions";
import MoviesList from "./MoviesList";

const Watched = (props) => {
  const onDeleteFromWatchedClick = (movie) => {
    props.deleteFromWatched(movie.id);
    props.addToWatchlist(movie);
  };

  const renderWatched = () => {
    if (props.watched.length === 0) return;

    return props.watched.map((movie) => {
      const renderedButtons = (
        <div className={`watched__buttons`}>
          <button onClick={() => props.deleteFromWatched(movie.id)}>
            <i className="fas fa-times"></i>
          </button>
          <button onClick={() => onDeleteFromWatchedClick(movie)}>
            <i className="fas fa-eye-slash"></i>
          </button>
        </div>
      );
      return (
        <MoviesList
          listName={"watched"}
          movie={movie}
          renderedButtons={renderedButtons}
          key={movie.id}
        />
      );
    });
  };

  return (
    <div className="watched">
      <h3 className="watched__title">My Watched Movies</h3>
      <div className="watched__container">{renderWatched()}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { watched: state.watched };
};

export default connect(mapStateToProps, { deleteFromWatched, addToWatchlist })(Watched);
