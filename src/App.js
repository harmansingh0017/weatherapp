import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = '716d14173a994bdc95515501230408';

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (location.trim() === '') {
      alert('Please enter a valid location.');
      return;
    }

    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.log('Error fetching weather data:', error);
      alert('Failed to fetch weather data. Please try again later.');
    }
  };

  return (
    <div className="App">
      <h1>Simple Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter location" />
        <button type="submit">Get Weather</button>
      </form>
      {weatherData && (
        <div className="weather-info">
          <h2>{weatherData.location.name}, {weatherData.location.country}</h2>
          <p>Weather: {weatherData.current.condition.text}</p>
          <p>Temperature: {weatherData.current.temp_c}°C</p>
        </div>
      )}
    </div>
  );
};

export default App;
