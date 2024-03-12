import React from 'react';

const CitySelection = ({ city, onCityChange }) => {
  const cities = ['Delhi', 'Mumbai', 'Chennai', 'Kolkata', 'None'];

  const handleChange = (event) => {
    onCityChange(event.target.value);
  };

  return (
    <div className="city-selection">
      <label htmlFor="city">Select City:</label>
      <select id="city" value={city} onChange={handleChange}>
        {cities.map((cityOption) => (
          <option key={cityOption} value={cityOption}>
            {cityOption}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CitySelection;
