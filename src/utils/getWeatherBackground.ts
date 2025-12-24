export function getWeatherBackground(weatherMain: string): string {
  switch (weatherMain) {
    case 'Clear':
      return 'bg-gradient-to-br from-yellow-300 to-blue-400';

    case 'Clouds':
      return 'bg-gradient-to-br from-gray-300 to-gray-500';

    case 'Rain':
    case 'Drizzle':
      return 'bg-gradient-to-br from-blue-600 to-gray-700';

    case 'Snow':
      return 'bg-gradient-to-br from-slate-100 to-blue-200';

    case 'Mist':
    case 'Fog':
    case 'Haze':
      return 'bg-gradient-to-br from-gray-200 to-gray-400';

    default:
      return 'bg-gradient-to-br from-blue-200 to-blue-500';
  }
}
