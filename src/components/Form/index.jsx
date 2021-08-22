import React, { useState } from 'react'
import TField from './TextField'
import NumberField from './NumberField'
import DateField from './DateField'
import { Label, OuterList, Button, Input, Field, DefaultForm, Container, Buttons } from './styles'
import { useFormInitialValues } from '../../hooks/useFormInitialValues'
const Form = props => {
	const { fields, initialValues } = props,
		[values, setValues] = useState({}),
		[errors, setErrors] = useState({}),
		handleError = (field, error) => {
			setErrors({ ...errors, [field]: error })
		},
		handleOnChange = (fieldId, value) => {
			setValues({ ...values, [fieldId]: value })
		},
		matchConfigToField = config => {
			if (['text', 'email'].includes(config.type))
				return <TField htmlFor={config.id} {...config} value={values[config.id] || config.value} setValue={handleOnChange} errors={errors} setErrors={handleError} />
			if (['number', 'decimal', 'currency'].includes(config.type))
				return <NumberField htmlFor={config.id} {...config} value={values[config.id] || config.value} setValue={handleOnChange} errors={errors} setErrors={handleError} />
			if (['date', 'type', 'datetime'].includes(config.type))
				return <DateField htmlFor={config.id} {...config} value={values[config.id] || config.value} setValue={handleOnChange} errors={errors} setErrors={handleError} />
			return (
				<>
					<Label htmlFor={config.id}>{config.label}</Label>
					<Input list={`${config.id}List`} id={config.id} placeholder={config.placeholder} value={values[config.id]} setValue={handleOnChange} errors={errors} setErrors={handleError} />
					<datalist id={`${config.id}List`}>
						{
							config.options.map((option, i) => {
								return (
									<option value={i} key={option}>{option}</option>
								)
							})
						}
					</datalist>
				</>
			)
		},
		onReset = () => {
			setValues({})
			setErrors({})
		}
	useFormInitialValues({ fields, initialValues })
	return (
		<Container>
			<DefaultForm>
				<OuterList className="flex-outer">
					{
						fields.map(field => (
							<Field key={field.id}>
								{
									matchConfigToField(field)
								}
							</Field>
						))
					}
					<Buttons>
						<Button type='reset' onClick={onReset} >Reset</Button>
						<Button type='submit'>Submit</Button>
					</Buttons>
				</OuterList>
			</DefaultForm >
		</Container>
	)
}

export default Form