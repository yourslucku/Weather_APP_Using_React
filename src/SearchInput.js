import React from 'react';

const SearchInput = ({ term, onTermChange }) => {
  const handleChange = (event) => {
    onTermChange(event.target.value);
  };

  return (
    <div className="search-input">
      <label htmlFor="search-term">Enter Zip Code:</label>
      <input
        id="search-term"
        type="text"
        value={term}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchInput;
