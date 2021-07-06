import React, { useState } from 'react'
import TField from './TextField'
import NumberField from './NumberField'
import { Label, OuterList, Button, Input, Field, DefaultForm, Container, Buttons } from './styles'
const Form = props => {
	const { fields } = props,
		[values, setValues] = useState({}),
		handleOnChange = (fieldId, value) => {
			setValues({ ...values, [fieldId]: value })
		},
		matchConfigToField = config => {
			if (['text', 'email'].includes(config.type))
				return <TField htmlFor={config.id} {...config} value={values[config.id]} setValue={handleOnChange} />
			if (['number', 'decimal', 'currency'].includes(config.type))
				return <NumberField htmlFor={config.id} {...config} value={values[config.id]} setValue={handleOnChange} />
			return (
				<>
					<Label htmlFor={config.id}>{config.label}</Label>
					<Input list={config.id} id={config.id} placeholder={config.placeholder} value={values[config.id]} setValue={handleOnChange} />
					<datalist id={config.id}>
						{
							config.options.map((option, i) => (
								<option value={i} key={option}>{option}</option>
							))
						}
					</datalist>
				</>
			)
		},
		onReset = fields => {
			fields.map(field => {
				console.log(field.id)
				handleOnChange(field.id, '')
			})
		}


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
						<Button type='reset' onClick={() => onReset(fields)} >Reset</Button>
						<Button type='submit'>Submit</Button>
					</Buttons>
				</OuterList>
			</DefaultForm >
		</Container>
	)
}

export default Form