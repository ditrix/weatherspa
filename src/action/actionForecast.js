import {GET_FORECAST_REQUEST, GET_FORECAST_SUCCESS, GET_FORECAST_ERROR} from '../constants'
//  eslint-disable-next-line
import {forecastResponse} from '../devdata/responses'


export const actionForecast = (city) => {
	const url = (city==='dz')? `https://api.openweathermap.org/data/2.5/forecast?lat=48.4861103&lon=35.628315&units=metric&appid=bb4f8b2e6d9a8b9c9d3d77979bf6e602`
								: 
								(city==='kramatorsk')?`https://api.openweathermap.org/data/2.5/forecast?q=kramatorsk&lang=ua&units=metric&appid=bb4f8b2e6d9a8b9c9d3d77979bf6e602`
								:
								`https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ua&units=metric&appid=bb4f8b2e6d9a8b9c9d3d77979bf6e602`
	return dispatch => {
		dispatch({type:GET_FORECAST_REQUEST})

	fetch(url)
			.then(response => response.json())
			.then(data=> {dispatch({type:GET_FORECAST_SUCCESS,payload:data});})
			.catch(error=>dispatch({type:GET_FORECAST_ERROR}))

	}
}

