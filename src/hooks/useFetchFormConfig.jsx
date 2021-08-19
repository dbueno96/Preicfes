import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getFormConfig } from '../redux/actions/Main'

export const useFetchFormConfig = form => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getFormConfig(form))
	}, [])
}