export interface DailyForecast {
  dt: number; // timestamp
  temp: { day: number; min: number; max: number };
  weather: { id: number; main: string; description: string; icon: string }[];
}

export interface ForecastData {
  daily: DailyForecast[];
  timezone_offset: number;
}
