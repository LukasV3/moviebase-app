import React from "react";
import { connect } from "react-redux";
import "../scss/ResultsCard.scss";
import { addToWatchlist, addToWatched, deleteFromWatchlist } from "../../actions";

const base_url = "https://image.tmdb.org/t/p/original";

const ResultsCard = ({
  currentMovie,
  addToWatchlist,
  deleteFromWatchlist,
  addToWatched,
  watchlist,
  watched,
}) => {
  const onAddToWatchedClick = () => {
    if (watchlist.find((movie) => movie.id === currentMovie.id)) {
      deleteFromWatchlist(currentMovie.id);
    }
    addToWatched(currentMovie);
  };

  const renderButtonClassNames = () => {
    return [watchlist, watched].map((moviesList) =>
      moviesList.find((movie) => movie.id === currentMovie.id)
        ? "results-card__button--disabled"
        : ""
    );
  };

  const renderButtons = () => {
    const [watchlistClassName, watchedClassName] = renderButtonClassNames();
    return (
      <>
        <button
          className={watchlistClassName || watchedClassName}
          onClick={() => addToWatchlist(currentMovie)}
        >
          ADD TO WATCHLIST
        </button>
        <button className={watchedClassName} onClick={() => onAddToWatchedClick()}>
          ADD TO WATCHED
        </button>
      </>
    );
  };

  return (
    <div className="results-card">
      <div className="results-card__img-div">
        <img
          src={`${base_url}${currentMovie.imagePoster}`}
          alt={currentMovie.title}
          className="results-card__img"
        ></img>
      </div>
      <div className="results-card__content">
        <h3 className="results-card__title">
          {currentMovie.title}
          <span className="results-card__rating">
            <span className="results-card__rating--span">{currentMovie.rating}</span>
            /10
          </span>
        </h3>
        <h5 className="results-card__description">{currentMovie.releaseYear}</h5>
        <div className="results-card__buttons">{renderButtons()}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    watchlist: state.watchlist,
    watched: state.watched,
  };
};

export default connect(mapStateToProps, {
  addToWatchlist,
  addToWatched,
  deleteFromWatchlist,
})(ResultsCard);
