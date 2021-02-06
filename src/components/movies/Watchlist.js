import React from "react";
import { connect } from "react-redux";
import "../scss/Watchlist.scss";
import { deleteFromWatchlist, addToWatched } from "../../actions";
import MoviesList from "./MoviesList";

const Watchlist = (props) => {
  const addToWatched = (title, id, imageSrc) => {
    props.deleteFromWatchlist(id);
    props.addToWatched({ title, id, imageSrc });
  };

  const renderWatchlist = () => {
    if (props.watchlist.length === 0) return;

    return props.watchlist.map((movie) => {
      const renderedButtons = (
        <div className={`watchlist__buttons`}>
          <button onClick={() => props.deleteFromWatchlist(movie.id)}>Delete</button>
          <button onClick={() => addToWatched(movie.title, movie.id, movie.imageSrc)}>
            Watched
          </button>
        </div>
      );
      return (
        <MoviesList
          listName="watchlist"
          movie={movie}
          key={movie.id}
          renderedButtons={renderedButtons}
        />
      );
    });
  };

  return (
    <div className="watchlist">
      <h3 className="watchlist__title">My Watchlist</h3>
      <div className="watchlist__container">{renderWatchlist()}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { watchlist: state.watchlist };
};

export default connect(mapStateToProps, { deleteFromWatchlist, addToWatched })(Watchlist);
