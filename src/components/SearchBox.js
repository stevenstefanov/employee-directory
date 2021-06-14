import React from "react";
import "../styles/SearchBox.css";

function SearchBox({ handleSearchChange }) {
  return (
      <form className="d-flex">
        <input
          className="form-control bg-light text-center"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={e => handleSearchChange(e)}
        />
      </form>
  );
}
export default SearchBox;
