import React from 'react'
import ErrorMessage from '../ErrorMessage'
import { Input, Label } from '../styles'

const DateField = props => {
	const { type, label, id, placeholder, disabled, max, min, required, value, setValue, errors, setErrors } = props
	const handleInput = e => {
		//validateDateField({ input: e.target.value, setErrors, max, min, type, required, id })
		setValue(id, e.target.value)
	}
	return (
		<>
			<Label required={required} htmlFor={id}>{label}</Label>
			<Input
				type={type}
				placeholder={placeholder}
				disabled={disabled}
				value={value}
				min={min}
				max={max}
				required={required}
				onInput={e => handleInput(e)} />
			{
				errors[id] ?
					<ErrorMessage message={errors[id].message} />
					: null
			}
		</>
	)
}

export default DateField