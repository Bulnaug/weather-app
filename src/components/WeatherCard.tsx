// src/components/WeatherCard.tsx
import React from 'react';
import { type WeatherData } from '../types/weather';

interface WeatherCardProps {
  data: WeatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ data }) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md text-center">
      <h2 className="text-2xl font-bold">{data.name}</h2>
      <p className="text-xl">{data.weather[0].description}</p>
      <p className="text-4xl font-bold">{Math.round(data.main.temp)}°C</p>
      <p>Humidity: {data.main.humidity}% | Wind: {data.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
