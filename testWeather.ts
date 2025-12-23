// testWeather.ts
const API_KEY = '1b0b75347ab3b88d1cdd0b786fc12b73'; // вставьте сюда новый ключ
const CITY = 'Berlin';

async function getWeather() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
    );

    const data = await response.json();
    console.log('API response:', data);

    if (!response.ok) {
      console.error('Ошибка API:', data.message);
      return;
    }

    console.log(`${CITY}: ${data.main.temp}°C, ${data.weather[0].description}`);
  } catch (err) {
    console.error('Ошибка запроса:', err);
  }
}

getWeather();
