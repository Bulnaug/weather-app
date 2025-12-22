import React, { useState } from 'react';
import WeatherCard from './components/WeatherCard';
import { fetchCurrentWeather } from './api/weather';
import { type WeatherData } from './types/weather';

const App: React.FC = () => {
  const [city, setCity] = useState('Moscow');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFetch = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchCurrentWeather(city);
      setWeather(data);
    } catch (err) {
      setError((err as Error).message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-blue-100 p-4">
      <input
        className="p-2 rounded-md border border-gray-300"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
        onClick={handleFetch}
      >
        {loading ? 'Loading...' : 'Get Weather'}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
};

export default App;
