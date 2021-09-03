import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getScheduledEvents } from 'redux/actions/Main'

export const useFetchScheduledEvents = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getScheduledEvents)
	}, [])
}