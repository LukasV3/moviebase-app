import React from "react";
import { connect } from "react-redux";
import "../scss/Watched.scss";
import { deleteFromWatched } from "../../actions";

const base_url = "https://image.tmdb.org/t/p/original";

const Watched = (props) => {
  const renderWatched = () => {
    if (props.watched.length === 0) return;

    return props.watched.map((movie) => {
      return (
        <div className="watched__card" key={movie.id}>
          <div className="watched__img-div">
            <img
              src={`${base_url}${movie.imageSrc}`}
              alt={movie.title}
              className="watched__img"
            ></img>
          </div>
          <div className="watched__buttons">
            <button onClick={() => props.deleteFromWatched(movie.id)}>Delete</button>
          </div>
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

export default connect(mapStateToProps, { deleteFromWatched })(Watched);
