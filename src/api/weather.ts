import { type WeatherData } from '../types/weather';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export async function fetchCurrentWeather(city: string): Promise<WeatherData> {
  const response = await fetch(
    `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
  );

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'City not found');
  }

  return data;
}
