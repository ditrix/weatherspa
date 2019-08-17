import {GET_WEATHER_REQUEST, GET_WEATHER_SUCCESS, GET_WEATHER_ERROR} from '../constants'

import {weatherResponse} from '../devdata/responses'

const url = `https://api.openweathermap.org/data/2.5/weather?lat=48.72305&lon=37.55629&lang=ua&units=metric&appid=bb4f8b2e6d9a8b9c9d3d77979bf6e602`

export const actionWeather = () => {
	return dispatch => {
		dispatch({type:GET_WEATHER_REQUEST})
		dispatch({type:GET_WEATHER_SUCCESS,payload:weatherResponse})
/*		fetch(url)
			.then(response => response.json())
			.then(data=>  dispatch({type:GET_WEATHER_SUCCESS,payload:data}))
			.catch(error=>dispatch({type:GET_WEATHER_ERROR}))*/
	}
}