import React from "react";
import PropTypes from "prop-types";
import "../styles/SearchResults.css";

const SearchResults = ({ results }) => {
  //  return ( { state && state.length > 0 && ( <ComponentOne />) });
  if (!results.length) {
    return <h1>No matching results</h1>;
  } else {
    return (
      <div className="searchResults">
        <h1>Search Results</h1>
        <div className="images">
          {results.map((result) => (
            <img className="nasaImage" src={result} alt="nasaImage" />
          ))}
        </div>
      </div>
    );
  }
};

SearchResults.propTypes = {
  results: PropTypes.array,
};

export default SearchResults;
