import {GET_WEATHER_REQUEST, GET_WEATHER_SUCCESS, GET_WEATHER_ERROR} from '../constants'
export const actionWeather = (city ) => {
	const url = (city === 'dz')
							? `https://api.openweathermap.org/data/2.5/weather?lat=48.4861103&lon=35.628315&lang=ua&units=metric&appid=bb4f8b2e6d9a8b9c9d3d77979bf6e602`
							: `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ua&units=metric&appid=bb4f8b2e6d9a8b9c9d3d77979bf6e602`
	return dispatch => {

		dispatch({type:GET_WEATHER_REQUEST})
		fetch(url)
			.then(response => response.json())
			.then(data=>  dispatch({type:GET_WEATHER_SUCCESS,payload:data}))
			.catch(error=>dispatch({type:GET_WEATHER_ERROR}))
	}
}