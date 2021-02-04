import React from "react";
import { connect } from "react-redux";
import "../scss/Watchlist.scss";
import { deleteFromWatchlist, addToWatched } from "../../actions";

const base_url = "https://image.tmdb.org/t/p/original";

const Watchlist = (props) => {
  const addToWatched = (title, id, imageSrc) => {
    props.deleteFromWatchlist(title);
    props.addToWatched({ title, id, imageSrc });
  };

  const renderWatchlist = () => {
    if (props.watchlist.length === 0) return;

    return props.watchlist.map((movie) => {
      return (
        <div className="watchlist__card" key={movie.id}>
          <div className="watchlist__img-div">
            <img
              src={`${base_url}${movie.imageSrc}`}
              alt={movie.title}
              className="watchlist__img"
            ></img>
          </div>
          <div className="watchlist__buttons">
            <button onClick={() => props.deleteFromWatchlist(movie.title)}>Delete</button>
            <button onClick={() => addToWatched(movie.title, movie.id, movie.imageSrc)}>
              Watched
            </button>
          </div>
        </div>
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
  return {
    watchlist: state.watchlist,
  };
};

export default connect(mapStateToProps, { deleteFromWatchlist, addToWatched })(Watchlist);
