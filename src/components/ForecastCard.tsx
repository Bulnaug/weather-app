import { type ForecastItem } from '../types/forecast';

interface Props {
  item: ForecastItem;
}

export const ForecastCard = ({ item }: Props) => (
  <div className="bg-white/80 backdrop-blur p-4 rounded-xl shadow text-center">
    <p className="font-semibold">
      {new Date(item.dt * 1000).toLocaleDateString(undefined, {
        weekday: 'short',
      })}
    </p>

    <img
      className="mx-auto"
      src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
      alt={item.weather[0].description}
    />

    <p>{Math.round(item.main.temp)}°C</p>
  </div>
);
