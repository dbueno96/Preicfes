import * as Actions from '../../actions/Main/actions'

const homeReducer = (state = [], action) => ({
	[Actions.INIT_STATE]: action.payload,
	[Actions.GET_LIST_DATA_REQUEST]: {
		...state,
		loading: true
	},
	[Actions.GET_LIST_DATA_SUCCESS]: {
		...state,
		loading: false,
		data: action.payload,
		error: ''
	},
	[Actions.GET_LIST_DATA_FAILURE]: {
		...state,
		loading: false,
		data: [],
		error: action.payload
	},
	[Actions.GET_FORM_CONFIG_SUCCESS]: {
		...state,
		loading: false,
		data: action.payload,
		error: ''
	},
	[Actions.GET_FORM_CONFIG_FAILURE]: {
		...state,
		loading: false,
		error: action.payload,
		data: []

	},
	[Actions.SET_FORM_INITIAL_VALUES_FROM_DATA]: {
		...state,
		data: action.payload && action.payload.fields && action.payload.fields.map(item => {
			const valueData = action.payload.values && action.payload.values.find(value => value.id === item.id)
			return valueData ? {
				...item,
				value: valueData.value
			} : item
		})
	},
	[Actions.GET_SCHEDULED_EVENTS]: {
		...state,
		loading: true,
		error: '',
		events: []
	},
	[Actions.GET_SCHEDULED_EVENTS_SUCCESS]: {
		...state,
		loading: false,
		error: '',
		events: action.payload
	},
	[Actions.GET_SCHEDULED_EVENTS_FAILURE]: {
		...state,
		loading: false,
		error: action.payload,
		events: []
	}
} [action.type] || state)

export default homeReducer