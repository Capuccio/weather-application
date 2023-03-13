import { abortController } from '@/utilities'

export const getCityGeocoding = (city: string) => {
	const controller = abortController();
	console.log(process.env.API_KEY)
	return { call: fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=10&appid=${process.env.API_KEY}`, { signal: controller.signal }), controller }
}

export const getCurrentWeather = (latitude: number, longitude: number) => {
	const controller = abortController();
	return { call: fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.API_KEY}`, { signal: controller.signal }), controller }
}

export const getForecast = (latitude: number, longitude: number) => {
	const controller = abortController();
	return { call: fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.API_KEY}`, { signal: controller.signal }), controller }
}