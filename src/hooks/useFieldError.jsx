import { useState } from 'react'

export const useFieldError = () => {
	const [errors, setErrors] = useState(null)

	return { errors, setErrors }
}