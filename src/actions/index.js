import axios from 'axios';

const API_KEY = '40a6e89d23aad0a8a229b4b1f186512b';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const URL = `${ROOT_URL}&q=${city},mx`;
  const request = axios.get(URL);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
