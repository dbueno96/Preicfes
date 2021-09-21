import homeReducer from './Main'
import {
	combineReducers
} from 'redux'


export const reducer = combineReducers({
	home: homeReducer,
})

export default homeReducer