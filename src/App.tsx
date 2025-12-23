import React, { useState } from 'react';
import WeatherCard from './components/WeatherCard';
import ForecastCard from './components/ForecastCard';
import { fetchCurrentWeather } from './api/weather';
import { fetchForecast } from './api/forecast';
import { type WeatherData } from './types/weather';
import { type ForecastData } from './types/forecast';

const App: React.FC = () => {
  const [city, setCity] = useState('Moscow');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFetch = async () => {
  setLoading(true);
  setError('');
  try {
    const data = await fetchCurrentWeather(city);
    setWeather(data);

    const forecastData = await fetchForecast(data.coord.lat, data.coord.lon);
    setForecast(forecastData);
  } catch (err) {
    setError((err as Error).message);
    setWeather(null);
    setForecast(null);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="h-screen flex flex-col items-center justify-start bg-blue-100 p-4 overflow-auto">
      <div className="flex flex-col items-center w-full max-w-md">
        <input
          className="p-2 rounded-md border border-gray-300 w-full"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
        />
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md w-full"
          onClick={handleFetch}
        >
          {loading ? 'Loading...' : 'Get Weather'}
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>

      {weather && <WeatherCard data={weather} />}

      {/* {forecast && (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6 w-full max-w-4xl">
          {forecast.daily.slice(0, 5).map((day) => (
            <ForecastCard key={day.dt} forecast={day} />
          ))}
        </div>
      )} */}
    </div>
  );
};

export default App;