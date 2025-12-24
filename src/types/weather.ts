export interface WeatherData {
  coord: {
    lat: number;
    lon: number;
  };
  weather: {
    main: string;
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
