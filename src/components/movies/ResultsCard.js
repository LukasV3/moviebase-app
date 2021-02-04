import React from "react";
import "../scss/ResultsCard.scss";

const ResultsCard = () => {
  return (
    <div className="results-card">
      <div className="results-card__img"></div>
      <div className="results-card__content">
        <h3 className="results-card__title">Movie Title Goes Here</h3>
        <h5 className="results-card__description">2001</h5>
        <div className="results-card__buttons">
          <button>ADD TO WATCHLIST</button>
          <button>ADD TO WATCHED</button>
        </div>
      </div>
    </div>
  );
};

export default ResultsCard;
