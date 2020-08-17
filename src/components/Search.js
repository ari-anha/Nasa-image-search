import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaSearch } from "react-icons/fa";
import getImages from "../requests/getImages";
import "../styles/Search.css";

const Search = ({ setSearchResults }) => {
  const [value, setValue] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResults(await getImages(value));
  };

  return (
    <div className="wrap">
      <form className="searchForm" onSubmit={handleSubmit}>
        <input
          className="searchInput"
          type="text"
          placeholder="Enter a keyword..."
          onChange={(event) => setValue(event.target.value)}
        />
        <button className="submitButton" type="submit">
          <FaSearch style={{ color: "white" }} className="icon" />
        </button>
      </form>
    </div>
  );
};

Search.propTypes = {
  setSearchResults: PropTypes.func,
};

export default Search;
