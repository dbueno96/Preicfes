import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getListData } from '../redux/actions/Request'

export const useFetchListData = (entity) => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getListData(entity))
	}, [])

}