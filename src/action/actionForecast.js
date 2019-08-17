import {GET_FORECAST_REQUEST, GET_FORECAST_SUCCESS, GET_FORECAST_ERROR} from '../constants'
//  eslint-disable-next-line
import {forecastResponse} from '../devdata/responses'

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=48.43&lon=37.34&lang=ua&units=metric&appid=bb4f8b2e6d9a8b9c9d3d77979bf6e602`

export const actionForecast = () => {
	return dispatch => {
		dispatch({type:GET_FORECAST_REQUEST})
//		dispatch({type:GET_FORECAST_SUCCESS,payload:forecastResponse})
	fetch(url)
			.then(response => response.json())
			.then(data=>  dispatch({type:GET_FORECAST_SUCCESS,payload:data}))
			.catch(error=>dispatch({type:GET_FORECAST_ERROR}))

	}
}

