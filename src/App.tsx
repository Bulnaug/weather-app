import { useState } from 'react';
import { fetchCurrentWeather } from './api/weather';
import { fetchForecast } from './api/forecast';
import { WeatherCard } from './components/WeatherCard';
import { ForecastCard } from './components/ForecastCard';
import { type WeatherData } from './types/weather';
import { type ForecastResponse } from './types/forecast';

function App() {
  const [city, setCity] = useState('Gescher');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastResponse | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFetch = async () => {
    setLoading(true);
    setError('');

    try {
      const weatherData = await fetchCurrentWeather(city);
      setWeather(weatherData);

      const forecastData = await fetchForecast(city);
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
    <div className="min-h-screen bg-blue-100 p-6 flex flex-col items-center">
      <div className="w-full max-w-md">
        <input
          className="w-full p-2 rounded border"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          className="w-full mt-2 bg-blue-500 text-white p-2 rounded"
          onClick={handleFetch}
        >
          {loading ? 'Loading…' : 'Get Weather'}
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>

      {weather && <WeatherCard data={weather} />}

      {forecast && (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
          {forecast.list
            .filter((_, i) => i % 8 === 0)
            .slice(0, 5)
            .map((item) => (
              <ForecastCard key={item.dt} item={item} />
            ))}
        </div>
      )}
    </div>
  );
}

export default App;
