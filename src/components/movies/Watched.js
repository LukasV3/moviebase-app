import React from "react";
import { connect } from "react-redux";
import "../scss/Watched.scss";

const base_url = "https://image.tmdb.org/t/p/original";

const Watched = (props) => {
  const renderWatched = () => {
    if (props.watched.length === 0) return;

    return props.watched.map((movie) => {
      return (
        <div className="watched__card" key={movie.id}>
          <img
            src={`${base_url}${movie.imgageSrc}`}
            alt={movie.title}
            className="watched__img"
          ></img>
        </div>
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
  return {
    watched: state.watched,
  };
};

export default connect(mapStateToProps)(Watched);
