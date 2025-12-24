import { type WeatherData } from '../types/weather';

interface Props {
  data: WeatherData;
}

export const WeatherCard = ({ data }: Props) => (
  <div className="bg-white/80 backdrop-blur p-6 rounded-xl shadow text-center mt-4">
    <h2 className="text-2xl font-bold">{data.name}</h2>
    <p className="capitalize">{data.weather[0].description}</p>
    <p className="text-4xl font-bold">
      {Math.round(data.main.temp)}°C
    </p>
    <p className="text-sm">
      💧 {data.main.humidity}% · 💨 {data.wind.speed} m/s
    </p>
  </div>
);
