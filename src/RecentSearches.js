import React from 'react';

const RecentSearches = ({ searches }) => {
  return (
    <div className="recent-searches">
      <h2>Recent Searches</h2>
      <ul>
        {searches.map((search, index) => (
          <li key={index} className="recent-search-item">
            {search} (Temperature: {Math.floor(Math.random() * 100)}°C) {/* Placeholder temperature */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentSearches;
