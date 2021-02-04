import React from "react";
import "../scss/Watchlist.scss";

const Watchlist = () => {
  return (
    <div className="watchlist">
      <h3 className="watchlist__title">My Watchlist</h3>

      <div className="watchlist__container">
        <div className="watchlist__card"></div>
        <div className="watchlist__card"></div>
        <div className="watchlist__card"></div>
        <div className="watchlist__card"></div>
        <div className="watchlist__card"></div>
        <div className="watchlist__card"></div>
        <div className="watchlist__card"></div>
        <div className="watchlist__card"></div>
        <div className="watchlist__card"></div>
        <div className="watchlist__card"></div>
      </div>
    </div>
  );
};

export default Watchlist;
