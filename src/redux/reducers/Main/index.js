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
} [action.type] || state)

export default homeReducer