import React from "react";
import "../scss/ResultsCard.scss";

const base_url = "https://image.tmdb.org/t/p/original";

const ResultsCard = ({ title, releaseDate, imgageSrc }) => {
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
          <button>ADD TO WATCHLIST</button>
          <button>ADD TO WATCHED</button>
        </div>
      </div>
    </div>
  );
};

export default ResultsCard;
