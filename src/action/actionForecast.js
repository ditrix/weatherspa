import {GET_FORECAST_REQUEST, GET_FORECAST_SUCCESS, GET_FORECAST_ERROR} from '../constants'
//  eslint-disable-next-line
import {forecastResponse} from '../devdata/responses'

// краматорск
//const url = `https://api.openweathermap.org/data/2.5/forecast?lat=48.43&lon=37.34&lang=ua&units=metric&appid=bb4f8b2e6d9a8b9c9d3d77979bf6e602`
//const url = `https://api.openweathermap.org/data/2.5/forecast?q=kramatorsk&lang=ua&units=metric&appid=bb4f8b2e6d9a8b9c9d3d77979bf6e602`

// майское
//const url = `https://api.openweathermap.org/data/2.5/forecast?lat=48.486758&lon=35.629409&lang=ua&units=metric&appid=bb4f8b2e6d9a8b9c9d3d77979bf6e602`

export const actionForecast = (city) => {
	//const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ua&units=metric&appid=bb4f8b2e6d9a8b9c9d3d77979bf6e602`
	
	const url = (city==='dz')? `https://api.openweathermap.org/data/2.5/forecast?lat=48.4861103&lon=35.628315&units=metric&appid=bb4f8b2e6d9a8b9c9d3d77979bf6e602`
								: `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ua&units=metric&appid=bb4f8b2e6d9a8b9c9d3d77979bf6e602`
	return dispatch => {
		dispatch({type:GET_FORECAST_REQUEST})

// for dev getdata from local		
//		dispatch({type:GET_FORECAST_SUCCESS,payload:forecastResponse})

// for real get data from server
	fetch(url)
			.then(response => response.json())
			.then(data=>  {dispatch({type:GET_FORECAST_SUCCESS,payload:data}); /*console.log(data) */})
			.catch(error=>dispatch({type:GET_FORECAST_ERROR}))

	}
}

