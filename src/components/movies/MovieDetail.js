import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import "../scss/MovieDetail.scss";
import history from "../../history";

const base_url = "https://image.tmdb.org/t/p/w500";

const MovieDetail = ({ currentMovie }) => {
  const renderMovieDetail = () => {
    if (!currentMovie) {
      return history.push("/");
    }

    return (
      <div className="movie-detail">
        <div onClick={() => history.goBack()} className="movie-detail__modal">
          <div onClick={(e) => e.stopPropagation()} className="movie-detail__modal--body">
            <div className="movie-detail__background-image--div">
              <img
                src={`${base_url}${currentMovie.imageBackdrop}`}
                alt={currentMovie.title}
                className="movie-detail__background-image"
              ></img>
            </div>

            <div className="movie-detail__content">
              <div className="movie-detail__main-image--div">
                <img
                  src={`${base_url}${currentMovie.imagePoster}`}
                  alt={currentMovie.title}
                  className="movie-detail__main-image"
                ></img>
              </div>

              <div className="movie-detail__info">
                <div>
                  <p className="movie-detail__title">
                    {currentMovie.title}
                    <span className="movie-detail__rating">
                      <span className="movie-detail__rating--span">
                        {currentMovie.rating}
                      </span>
                      /10
                    </span>
                  </p>
                  <p className="movie-detail__year">{currentMovie.releaseYear}</p>
                </div>
                <p className="movie-detail__description">{currentMovie.description}</p>
              </div>
            </div>

            <div onClick={() => history.goBack()} className="movie-detail__back-button">
              <i className="fas fa-times"></i>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return ReactDOM.createPortal(renderMovieDetail(), document.querySelector("#modal"));
};

const mapStateToProps = (state) => {
  const [listName, id] = history.location.pathname.slice(1).split("/");
  return { currentMovie: state[listName].find((movie) => movie.id === +id) };
};

export default connect(mapStateToProps)(MovieDetail);
