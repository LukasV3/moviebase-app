import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./scss/Navbar.scss";
import { clearFetchedMovies } from "../actions";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item navbar__item--left">
          <Link
            to="/"
            onClick={() => props.clearFetchedMovies()}
            className="navbar__link navbar__link--logo"
          >
            MOVIEBASE
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/watchlist" className="navbar__link">
            Watchlist
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/watched" className="navbar__link">
            Watched
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/" className="navbar__link navbar__link--blue">
            <i className="fas fa-search"></i>
            Search
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default connect(null, { clearFetchedMovies })(Navbar);
