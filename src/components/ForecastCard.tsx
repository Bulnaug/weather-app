import React from 'react';
import { type DailyForecast } from '../types/forecast';

interface ForecastCardProps {
  forecast: DailyForecast;
}

const ForecastCard: React.FC<ForecastCardProps> = ({ forecast }) => {
  const date = new Date(forecast.dt * 1000).toLocaleDateString(undefined, { weekday: 'short', day: 'numeric', month: 'short' });
  return (
    <div className="p-4 bg-white rounded-xl shadow-md text-center flex flex-col items-center">
      <p className="font-semibold">{date}</p>
      <img
        src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
        alt={forecast.weather[0].description}
        className="w-16 h-16"
      />
      <p className="capitalize">{forecast.weather[0].description}</p>
      <p>{Math.round(forecast.temp.day)}°C</p>
      <p className="text-sm text-gray-500">Min: {Math.round(forecast.temp.min)}°C | Max: {Math.round(forecast.temp.max)}°C</p>
    </div>
  );
};

export default ForecastCard;
