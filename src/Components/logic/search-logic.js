import React, { useState } from "react";
import search from "../icons/search.png";
import ActiveSearch from "./activeSearch-logic"; // Poprawny import

const Search = () => {
  const [showSearch, setShowSearch] = useState(false);

  const ToggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <>
      {showSearch && <ActiveSearch />} {/* Wyświetl ActiveSearch, jeśli showSearch jest true */}
      <button onClick={ToggleSearch} id="search_button">
        <img src={search} alt="wyszukaj" />
      </button>
    </>
  );
};

export default Search;
