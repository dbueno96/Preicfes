export const isValidNumberField = args => {
	const {
		input,
		min,
		max,
		maxLength,
		minLength,
		required
	} = args
	let result = {}

	result = required && isRequired(input, required)
	if (result)
		return result
	result = max && isValidMaxValue(input, max)
	if (result)
		return result
	result = min && isValidMinValue(input, min)
	if (result)
		return result
	debugger
	result = minLength && isValidMinLength(input, minLength)
	if (result)
		return result
	result = maxLength && isValidMaxLength(input, maxLength - 1)
	if (result)
		return result
	return null
}

export const isValidTextField = args => {
	const {
		input,
		maxLength,
		required,
		minLength,
		type,
	} = args
	let result = null
	result = required && isRequired(input, required)
	if (result)
		return result

	result = type === 'email' && isValidEmail(input)
	if (result)
		return result

	result = minLength && isValidMinLength(input, minLength)
	if (result)
		return result

	result = maxLength && isValidMaxLength(input, maxLength - 1)
	if (result)
		return result


	return null
}

export const isRequired = (val, req) => (
	req && val ? null :
	req && val === 0 ?
	null : {
		type: 'Valor requerido',
		message: 'Este campo es requerido'
	}
)

export const validateTextField = args => {
	const {
		maxLength,
		minLength,
		required,
		input,
		type,
		setErrors,
		value,
		id
	} = args
	setErrors(id, isValidTextField({
		input,
		maxLength,
		minLength,
		required,
		type,
		value
	}))
}
export const validateNumberField = args => {
	const {
		min,
		max,
		maxLength,
		minLength,
		required,
		setErrors,
		setValue,
		id
	} = args
	let input = parseFloat(args.input)

	setErrors(id, isValidNumberField({
		min,
		max,
		maxLength,
		minLength,
		required,
		input,
		setValue
	}) || null)
}

export const isValidMinValue = (val, min) => (
	val >= (min || val) ? null : {
		type: 'Valor mínimo',
		message: `El valor ingresado debe ser mayor a ${min}`
	}
)

export const isValidMaxValue = (val, max) => (
	val <= (max || val) ? null : {
		type: 'Valor máximo',
		message: `El valor ingresado debe ser mayor a ${max}`
	}
)

export const isValidMaxLength = (val, maxLength) => (
	String(val).length <= maxLength ? null : {
		type: 'Longitud máxima',
		message: `La longitud debe ser menor a ${maxLength + 1} caracteres`
	}
)

export const isValidMinLength = (val, minLength) => (
	String(val).length >= minLength ? null : {
		type: 'Longitud mínima',
		message: `La longitud debe ser mayor a ${minLength - 1} caracteres`
	}
)

export const isValidEmail = (val) => {
	const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/
	if (val.match(mailformat)) {
		return null
	}
	return {
		type: 'Email',
		message: 'La dirección de correo electrónico no es válida'
	}
}