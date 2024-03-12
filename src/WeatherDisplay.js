import React from 'react';

const Weather = ({ weatherData }) => {
  if (!weatherData) {
    return <div>Loading weather data...</div>;
  }

  const { name, main, weather } = weatherData;
  const { temp, humidity } = main;
  const { description } = weather[0];

  return (
    <div>
      <h1>Weather for {name}</h1>
      <p>Temperature: {temp}°C</p>
      <p>Description: {description}</p>
      <p>Humidity: {humidity}%</p>
    </div>
  );
};

export default Weather;
