import React, { useState } from "react";
import { GrFormSearch } from "react-icons/gr";
import "../styles/Search.css";

const Search = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <form>
        <input
          className="searchInput"
          type="text"
          onChange={(event) => setValue(event.target.value)}
        />
        <button className="submitButton" typeof="submit">
          <GrFormSearch />
        </button>
      </form>
    </>
  );
};

export default Search;
