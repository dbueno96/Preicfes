import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setFormInitialValuesFromData } from '../redux/actions/Main'

export const useFormInitialValues = ({ fields, initialValues }) => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(setFormInitialValuesFromData({ fields, values: initialValues }))
	}, [])

}
