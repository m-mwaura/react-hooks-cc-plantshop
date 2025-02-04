import React from "react";

function Search({ onSearch }) {
  const handleChange = (e) => {
    onSearch(e.target.value); // Pass the search term to the parent
  };

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;