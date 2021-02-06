import React from "react";

const base_url = "https://image.tmdb.org/t/p/original";

const MoviesList = ({ listName, movie, renderedButtons }) => {
  return (
    <div className={`${listName}__card`}>
      <div className={`${listName}__img-div`}>
        <img
          src={`${base_url}${movie.imagePoster}`}
          alt={movie.title}
          className={`${listName}__img`}
        ></img>
      </div>

      {renderedButtons}
    </div>
  );
};

export default MoviesList;
