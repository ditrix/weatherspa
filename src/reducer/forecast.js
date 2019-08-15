//  eslint-disable-next-line
const GET_FORECAST_REQUEST = 'GET_FORECAST_REQUEST'
//  eslint-disable-next-line
const GET_FORECAST_SUCCESS = 'GET_FORECAST_SUCCESS'
//  eslint-disable-next-line
const GET_FORECAST_ERROR = 'GET_FORECAST_ERROR'

const initialState = {
	result: null,
	finded: false,
	lat: '',
	lon: '',
	data: null
}

export const forecast = (state=initialState,action) => {
	return state
}