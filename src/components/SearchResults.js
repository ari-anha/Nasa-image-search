import React from "react";
import PropTypes from "prop-types";
import "../styles/App.css";
// import Search from "./Search";

const SearchResults = ({ results }) => {
  //  return ( { state && state.length > 0 && ( <ComponentOne />) });
  if (!results.length) {
    return <p>No matching results</p>;
  } else {
    return (
      <>
        <p>Search Results</p>
        {results.map((result) => (
          <img className="nasaImages" src={result} alt="nasaImage" />
        ))}
      </>
    );
  }
};

SearchResults.propTypes = {
  results: PropTypes.array,
};

export default SearchResults;
