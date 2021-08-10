import * as Actions from './actions'
import {
	fetchListData
} from '../../../services'

export const initializeState = state => ({
	type: Actions.INIT_STATE,
	payload: state
})


export const getListDataRequest = () => ({
	type: Actions.GET_LIST_DATA_REQUEST
})

export const getListDataSuccess = data => ({
	type: Actions.GET_LIST_DATA_SUCCESS,
	payload: data
})

export const getListDataFailure = error => ({
	type: Actions.GET_LIST_DATA_FAILURE,
	payload: error
})

export const getListData = entity => (dispatch => {
	dispatch(getListDataRequest())
	fetchListData(entity)
		.then(res => dispatch(getListDataSuccess(res)))
		.catch(err => dispatch(getListDataFailure(err)))
})