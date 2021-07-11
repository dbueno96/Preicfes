import React from 'react'
import ErrorMessage from '../ErrorMessage'
import { validateNumberField } from '../utils'
import { Input, Label } from '../styles'

const NumberField = props => {
	const { type, label, id, placeholder, disabled, required, min, max, maxLength, minLength, step, value, setValue, errors, setErrors } = props
	const handleInput = e => {
		validateNumberField({ input: e.target.value, setErrors, min, max, maxLength, minLength, required, id })
		setValue(id, e.target.value)
	}

	return (
		<>
			<Label required={required} htmlFor={id}> {label} </Label>
			<Input
				type={type}
				id={id}
				placeholder={placeholder}
				value={value}
				disabled={disabled}
				required={required}
				step={step || 1}
				maxLength={maxLength}
				minLength={minLength}
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
export default NumberField