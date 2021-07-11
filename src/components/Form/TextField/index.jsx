import React from 'react'
import ErrorMessage from '../ErrorMessage'
import { Input, Label } from '../styles'
import { validateTextField } from '../utils'
const TField = props => {
	const { type, label, id, placeholder, disabled, maxLength, minLength, required, value, setValue, errors, setErrors } = props
	const handleInput = e => {
		validateTextField({ input: e.target.value, setErrors, maxLength, minLength, type, required, id })
		setValue(id, e.target.value)
	}
	return (
		<>
			<Label required={required} htmlFor={id} >{label} </Label>
			<Input
				type={type}
				id={id}
				placeholder={placeholder}
				disabled={disabled}
				value={value}
				minLength={minLength}
				maxLength={maxLength}
				required={required}
				onInput={e => handleInput(e)}
			/>
			{
				errors[id] ?
					<ErrorMessage message={errors[id].message} />
					: null
			}

		</>
	)
}

export default TField