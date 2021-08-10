import axios from 'axios'

const baseURL = 'http://localhost:3000'


export const getInitialState = () => {
	const res = axios.get(`${baseURL}/initialState`)
	return res
		.then(res => res.data)
		.catch(() => console.error('Response error for initialState'))
}

export const fetchListData = entity => {
	const res = axios.get(`${baseURL}/${entity}`)
	debugger
	return res
		.then(res => res.data)
		.catch(() => console.error(`Response error for ${entity}`))

}