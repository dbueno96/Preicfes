import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getInitialState } from '../services'
import { initializeState } from '../redux/actions/Main'

export const useInitializeStore = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		getInitialState()
			.then(state => {
				dispatch(initializeState(state))
			})
	}, [])
	return useSelector(state => state.data)
}
