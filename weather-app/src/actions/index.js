import axios from 'axios';

const API_KEY = '32eae7a51f07467d87b77fa453442fc9';
const rootURL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export function fetchWeather(city){

	const url = `${rootURL}&q=${city},in`;
	const request = axios.get(url);
	console.log(request);
	return {
		type : FETCH_WEATHER,
		payload : request
	};
}
