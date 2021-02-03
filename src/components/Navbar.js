import React from "react";
import "./scss/Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item navbar__item--left">
          <Link to="/" className="navbar__link navbar__link_left">
            Logo
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
          <Link to="/" className="navbar__link">
            Search
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
