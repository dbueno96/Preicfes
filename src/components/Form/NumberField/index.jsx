import React, { useState } from 'react'
import { validateNumberField } from '../utils'
import { Input, Label, ErrorsDiv, ErrorList, Error, Message } from '../styles'
import { useFieldError } from '../../../hooks/useFieldError'

const NumberField = props => {
	const { type, label, id, placeholder, disabled, required, min, max, maxLength, step } = props
	const [value, setValue] = useState('')
	const { errors, setErrors } = useFieldError(null)
	const handleInput = e => {
		validateNumberField({ input: e.target.value, setErrors, min, max, required })
		setValue(e.target.value)
	}

	return (
		<>
			<Label htmlFor={id}> {label} </Label>
			<Input
				type={type}
				id={id}
				placeholder={placeholder}
				value={value}
				disabled={disabled}
				required={required}
				step={step || 1}
				maxLength={maxLength || 8}
				onInput={e => handleInput(e)}
			/>
			{
				errors ?
					<ErrorsDiv>
						<ErrorList>
							<Error>
								<Message>
									{errors.message}
								</Message>
							</Error>
						</ErrorList>
					</ErrorsDiv>
					: null
			}

		</>
	)
}
export default NumberField