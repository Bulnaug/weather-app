import { type ForecastResponse } from '../types/forecast';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export async function fetchForecast(city: string): Promise<ForecastResponse> {
  const response = await fetch(
    `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
  );

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Forecast error');
  }

  return data;
}

