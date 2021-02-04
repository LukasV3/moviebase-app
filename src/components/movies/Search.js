import React from "react";
import "../scss/Search.scss";
import ResultsCard from "./ResultsCard";

const Search = () => {
  return (
    <div className="search">
      <input type="text" placeholder="Search movie..." className="search__input" />
      <div className="search__results">
        <ResultsCard />
        <ResultsCard />
        <ResultsCard />
      </div>
    </div>
  );
};

export default Search;
