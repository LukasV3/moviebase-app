import React from "react";
import "../scss/ResultsCard.scss";
import { addToWatchlist } from "../../actions";
import { connect } from "react-redux";

const base_url = "https://image.tmdb.org/t/p/original";

const ResultsCard = ({ title, releaseDate, imgageSrc, id, addToWatchlist }) => {
  const onAddToWatchlistClick = (title, id) => {
    addToWatchlist({ title, id });
  };

  return (
    <div className="results-card">
      <div className="results-card__img-div">
        <img
          src={`${base_url}${imgageSrc}`}
          alt={title}
          className="results-card__img"
        ></img>
      </div>
      <div className="results-card__content">
        <h3 className="results-card__title">{title}</h3>
        <h5 className="results-card__description">{releaseDate}</h5>
        <div className="results-card__buttons">
          <button onClick={() => onAddToWatchlistClick(title, id)}>
            ADD TO WATCHLIST
          </button>
          <button>ADD TO WATCHED</button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    watchlist: state.watchlist,
  };
};

export default connect(mapStateToProps, { addToWatchlist })(ResultsCard);
