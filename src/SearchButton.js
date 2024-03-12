import React from 'react';

const SearchButton = ({ onSearch, onReset }) => {
  return (
    <div className="search-buttons">
      <button onClick={onSearch}>Search</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default SearchButton;
