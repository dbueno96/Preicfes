import React from 'react'
import { Label } from '../styles'
import { Input } from './styles'

const CheckBoxField = props => {
	const { fieldId, label, type, text} = props
	return (
		<>
			P
			<Input type={type} />
			<Label htmlFor={fieldId} id={fieldId}>{label}</Label>
		</>
	)
}

export default CheckBoxField