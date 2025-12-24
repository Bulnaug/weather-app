export interface ForecastItem {
  dt: number;
  main: {
    temp: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}

export interface ForecastResponse {
  list: ForecastItem[];
}
