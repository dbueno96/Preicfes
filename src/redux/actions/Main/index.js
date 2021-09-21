import * as Actions from './actions'
import {
	fetchListData,
	fetchFormConfig,
	fetchScheduledEvents
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

export const getListData = entity => (
	dispatch => {
		dispatch(getListDataRequest())
		fetchListData(entity)
			.then(res => dispatch(getListDataSuccess(res)))
			.catch(err => dispatch(getListDataFailure(err)))
	})

export const getFormConfig = form => (
	dispatch => {
		dispatch(getListDataRequest())
		fetchFormConfig(form)
			.then(res => dispatch(getFormConfigSuccess(res)))
			.catch(err => dispatch(getFormConfigFaulure(err)))
	}
)

export const getFormConfigSuccess = payload => ({
	type: Actions.GET_FORM_CONFIG_SUCCESS,
	payload
})

export const getFormConfigFaulure = payload => ({
	type: Actions.GET_FORM_CONFIG_FAILURE,
	payload
})

export const setFormInitialValuesFromData = payload => ({
	type: Actions.SET_FORM_INITIAL_VALUES_FROM_DATA,
	payload
})

export const getScheduledEvents = date => {
	return (
		dispatch => {
			dispatch(getListDataRequest())
			fetchScheduledEvents(date)
				.then(res => dispatch(getScheduledEventsSuccess(res)))
				.catch(err => dispatch(getScheduledEventsFailure(err)))
		}
	)
}

export const getScheduledEventsSuccess = payload => ({
	type: Actions.GET_SCHEDULED_EVENTS_SUCCESS,
	payload
})

export const getScheduledEventsFailure = payload => ({
	type: Actions.GET_SCHEDULED_EVENTS_FAILURE,
	payload
})