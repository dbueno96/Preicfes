import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getListData } from '../redux/actions/Main'

export const useFetchListData = (entity) => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getListData(entity))
	}, [])

}