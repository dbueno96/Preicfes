import React from 'react'
import TField from './TextField'
import NumberField from './NumberField'
import { Label, OuterList, Button, Input, Field, DefaultForm, Container, Buttons } from './styles'
const Form = () => {
	return (
		<Container>
			<DefaultForm>
				<OuterList className="flex-outer">
					<Field>
						<TField htmlFor="firstName" placeholder='Ingrese sus nombres' type='text' required={true} label='Nombres' id='firstName' />
					</Field>
					<Field>
						<TField htmlFor="lastName" minLength={5} maxLength={15} placeholder='Ingrese su apellido' type='text' required={true} label='Apellido' id='lastName' />
					</Field>
					<Field>
						<TField htmlFor='email' placeholder='Ingrese su correo electrónico' type='email' required={true} label='Email' id='email' />
					</Field>
					<Field>
						<NumberField htmlFor='age' min={18} maxLength={5} placeholder='Ingrese su edad' type='number' required label='Edad' id='age' />
					</Field>
					<Field>
						<Label htmlFor="role">Rol</Label>
						<Input list='optionList' id="role" placeholder='Ingrese el rol' />
						<datalist id='optionList'>
							<option id='defaultOption' value='1'>Seleccione una opción</option>
							<option value='2'>Admin</option>
							<option value='3'>Profesor</option>
							<option value='4'>Product Owner</option>
						</datalist>
					</Field>
					<Buttons>
						<Button type="reset">Reset</Button>
						<Button type="submit">Submit</Button>
					</Buttons>
				</OuterList>
			</DefaultForm >
		</Container>
	)
}

export default Form