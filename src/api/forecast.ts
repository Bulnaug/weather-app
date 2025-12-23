import { type ForecastData } from '../types/forecast';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export async function fetchForecast(lat: number, lon: number): Promise<ForecastData> {
  const response = await fetch(`${BASE_URL}/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,current,alerts&units=metric&appid=${API_KEY}`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Failed to fetch forecast');
  }
  return data;
}
