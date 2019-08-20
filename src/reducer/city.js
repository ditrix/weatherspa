//  eslint-disable-next-line
import {GET_CITY,GET_WEATHER_SUCCESS} from '../constants'
const initialState = {
	city: ''
}

export const city = (state=initialState,action) => {
	console.log(action.type)
	switch(action.type){
		case GET_CITY:
			return {...state,city: action.payload}
		
		case GET_WEATHER_SUCCESS:
			return {...state, city: action.payload.name}

		default:	
			return state
	}
}