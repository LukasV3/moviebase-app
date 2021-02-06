import React from "react";
import { connect } from "react-redux";
import "../scss/ResultsCard.scss";
import { addToWatchlist, addToWatched, deleteFromWatchlist } from "../../actions";

const base_url = "https://image.tmdb.org/t/p/original";

const ResultsCard = ({
  title,
  releaseYear,
  imageSrc,
  id,
  addToWatchlist,
  deleteFromWatchlist,
  addToWatched,
  watchlist,
  watched,
}) => {
  const onAddToWatchedClick = () => {
    if (watchlist.find((movie) => movie.id === id)) {
      deleteFromWatchlist(id);
    }
    addToWatched({ title, id, imageSrc });
  };

  const renderButtonClassNames = () => {
    return [watchlist, watched].map((moviesList) =>
      moviesList.find((movie) => movie.id === id) ? "results-card__button--disabled" : ""
    );
  };

  const renderButtons = () => {
    const [watchlistClassName, watchedClassName] = renderButtonClassNames();
    return (
      <>
        <button
          className={watchlistClassName || watchedClassName}
          onClick={() => addToWatchlist({ title, id, imageSrc })}
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
          src={`${base_url}${imageSrc}`}
          alt={title}
          className="results-card__img"
        ></img>
      </div>
      <div className="results-card__content">
        <h3 className="results-card__title">{title}</h3>
        <h5 className="results-card__description">{releaseYear}</h5>
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
