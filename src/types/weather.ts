export interface WeatherData {
  coord: {
    lat: number;
    lon: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  name: string;
}
