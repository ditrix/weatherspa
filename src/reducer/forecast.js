//  eslint-disable-next-line
import {GET_FORECAST_REQUEST, GET_FORECAST_SUCCESS, GET_FORECAST_ERROR} from '../constants'

const initialState = {
	result: null,
	loaded: false,
	loading: false,
	error: false,
	data: null
}

export const forecast = (state=initialState,action) => {
switch(action.type){
		case GET_FORECAST_REQUEST:
			return {...state,loading:true, loaded: false, data: null,error:false}
		case GET_FORECAST_SUCCESS:
			return {...state,loading:false,loaded:true,data: action.payload,error:false}
		case GET_FORECAST_ERROR:
			return {...state,loading:false, loaded:false, data: null,error:true}		
		default:
			return state	
		}	
	
}