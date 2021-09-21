import axios from 'axios'

const BASE_URL = 'http://localhost:3000'


export const getInitialState = () => {
	const res = axios.get(`${BASE_URL}/initialState`)
	return res
		.then(res => res.data)
		.catch(() => console.error('Response error for initialState'))
}

export const fetchListData = entity => {
	const res = axios.get(`${BASE_URL}/${entity}`)
	return res
		.then(res => res.data)
		.catch(() => console.error(`Response error for ${entity}`))

}

export const fetchFormConfig = form => {
	const res = axios.get(`${BASE_URL}/${form}`)
	return res
		.then(res => res.data)
		.catch(() => console.error(`Response error for form ${form}`))

}

export const fetchScheduledEvents = date => {
	const res = axios.get(`${BASE_URL}/events`)
	return res
		.then(res => res.data)
		.catch(() => console.error(`Response error for events at ${date.format('MM-YYYY')}`))
}