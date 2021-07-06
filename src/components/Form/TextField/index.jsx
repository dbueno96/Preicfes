import React from 'react'
import { Input, Label, ErrorsDiv, ErrorList, Error, Message } from '../styles'
import { useFieldError } from '../../../hooks/useFieldError'
import { validateTextField } from '../utils'
const TField = props => {
	const { type, label, id, placeholder, disabled, maxLength, minLength, required, value, setValue } = props
	const { errors, setErrors } = useFieldError(null)
	const handleInput = e => {
		console.log('valid', type)
		validateTextField({ input: e.target.value, setErrors, maxLength, minLength, type, required })
		setValue(id, e.target.value)
	}
	return (
		<>
			<Label htmlFor={id} >{label} </Label>
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

export default TField