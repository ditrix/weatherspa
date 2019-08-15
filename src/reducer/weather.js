import {GET_WEATHER_REQUEST, GET_WEATHER_SUCCESS, GET_WEATHER_ERROR} from '../constants'
const initialState = {
	result: null,
	loaded: false,
	loading: false,
	error: false,
	data: null
}

export const weather = (state=initialState,action) => {
	switch(action.type){
		case GET_WEATHER_REQUEST:
			return {...state,loading:true, loaded: false, data: null,error:false}
		case GET_WEATHER_SUCCESS:
			return {...state,loading:false,loaded:true,data: action.payload,error:false}
		case GET_WEATHER_ERROR:
			return {...state,loading:false, loaded:false, data: null,error:true}		
		default:
			return state
	}
	
}