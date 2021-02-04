import React, { useState } from "react";
import "../scss/Search.scss";
import ResultsCard from "./ResultsCard";

const Search = () => {
  const [term, setTerm] = useState("");
  const [searchDebounce, setSearchDebounce] = useState(null);

  const searchTerm = (value) => {
    console.log(value);
  };

  const onInputChange = (e) => {
    setTerm(e.target.value);

    setSearchDebounce(clearInterval(searchDebounce));
    setSearchDebounce(setTimeout(() => searchTerm(e.target.value), 500));
  };

  return (
    <div className="search">
      <input
        onChange={(e) => onInputChange(e)}
        value={term}
        type="text"
        placeholder="Search movie..."
        className="search__input"
      />
      <div className="search__results">
        <ResultsCard />
        <ResultsCard />
        <ResultsCard />
      </div>
    </div>
  );
};

export default Search;
