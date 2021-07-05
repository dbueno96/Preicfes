import React from 'react'
import { Label, Input, P } from '../styles'

const CheckBoxField = props => {
	const { fieldId, label, type, text } = props
	return (
		<>	
			<P>
				{text}
			</P>
			<Input type={type} />
			<Label htmlFor={fieldId} id={fieldId}>{label}</Label>
		</>
	)
}

export default CheckBoxField