import React, { useState } from "react";
import PropTypes from "prop-types";
import { GrFormSearch } from "react-icons/gr";
import getImages from "../requests/getImages";
import "../styles/Search.css";

const Search = ({ setSearchResults }) => {
  const [value, setValue] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResults(await getImages(value));

    // setValue(""); ???
  };

  return (
    <>
      <form className="searchForm" onSubmit={handleSubmit}>
        <input
          className="searchInput"
          type="text"
          onChange={(event) => setValue(event.target.value)}
        />
        <button className="submitButton" type="submit">
          <GrFormSearch />
        </button>
      </form>
    </>
  );
};

Search.propTypes = {
  setSearchResults: PropTypes.array,
};

export default Search;
