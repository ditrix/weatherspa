import {combineReducers} from 'redux'

import {city} from './city'
import {forecast} from './forecast'
import {weather} from './weather'

export const rootReducer = combineReducers({
	city,
	forecast,
	weather,
})