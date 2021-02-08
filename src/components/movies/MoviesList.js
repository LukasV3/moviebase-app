import React from "react";
import history from "../../history";

const base_url = "https://image.tmdb.org/t/p/original";

const MoviesList = ({ listName, movie, renderedButtons }) => {
  return (
    <div className={`${listName}__card`}>
      {renderedButtons}
      <div className={`${listName}__img-div`}>
        <img
          onClick={() => history.push(`/${listName}/${movie.id}`)}
          src={`${base_url}${movie.imagePoster}`}
          alt={movie.title}
          className={`${listName}__img`}
        ></img>
      </div>
    </div>
  );
};

export default MoviesList;
