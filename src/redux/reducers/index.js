import homeReducer from './Main'
import requestReducer from './Request'
import {
	combineReducers
} from 'redux'


export const reducer = combineReducers({
	home: homeReducer,
	request: requestReducer
})

export default homeReducer