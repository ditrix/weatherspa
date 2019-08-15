//  eslint-disable-next-line
export const SEARCH_CITY_REQUEST = 'SEARCH_CITY_REQUEST'
export const SEARCH_CITY_SUCCESS = 'SEARCH_CITY_SUCCESS'
export const CITY_NOT_FOUND = 'CITY_NOT_FOUND'
export const SEARCH_CITY_ERROR = 'SEARCH_CITY_ERROR'

const initialState = {
	result: null,
	finded: false,
	data: {
		name: '',
		lat: '',
		lon: '',
	}
}

export const city = (state=initialState,action) => {
	return state
}