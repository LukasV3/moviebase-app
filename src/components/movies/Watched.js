import React from "react";
import { connect } from "react-redux";
import "../scss/Watched.scss";
import { deleteFromWatched } from "../../actions";
import MoviesList from "./MoviesList";

const Watched = (props) => {
  const renderWatched = () => {
    if (props.watched.length === 0) return;

    return props.watched.map((movie) => {
      const renderedButtons = (
        <div className={`watched__buttons`}>
          <button onClick={() => props.deleteFromWatched(movie.id)}>Delete</button>
        </div>
      );
      return (
        <MoviesList
          listName={"watched"}
          movie={movie}
          renderedButtons={renderedButtons}
          key={movie.id}
        />
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
  return { watched: state.watched };
};

export default connect(mapStateToProps, { deleteFromWatched })(Watched);
