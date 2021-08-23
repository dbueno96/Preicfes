import { useState } from 'react'

export const useBooleanState = () => {
	const [value, setValue] = useState(false),
		activate = () => setValue(true),
		deactivate = () => setValue(false)

	return { value, activate, deactivate }
}