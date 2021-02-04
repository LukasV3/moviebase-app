import React from "react";
import { connect } from "react-redux";
import "../scss/Watchlist.scss";

const base_url = "https://image.tmdb.org/t/p/original";

const Watchlist = (props) => {
  const renderWatchlist = () => {
    if (props.watchlist.length === 0) return;

    return props.watchlist.map((movie) => {
      return (
        <div className="watchlist__card" key={movie.id}>
          <img
            src={`${base_url}${movie.imgageSrc}`}
            alt={movie.title}
            className="watchlist__img"
          ></img>
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

export default connect(mapStateToProps)(Watchlist);
