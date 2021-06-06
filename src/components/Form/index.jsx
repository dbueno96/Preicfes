import React from 'react'
import { Label, OuterList, Button, Select, Input, DefaultForm, Container, Buttons } from './styles'
const Form = () => {
	return (
		<Container>
			<DefaultForm>
				<OuterList className="flex-outer">
					<li>
						<Label htmlFor="firstName">Nombres</Label>
						<Input type="text" id="firstName" placeholder="Enter your first name here" />
					</li>
					<li>
						<Label htmlFor="last-name">Apellidos</Label>
						<Input type="text" id="lastName" placeholder="Enter your last name here" />
					</li>
					<li>
						<Label htmlFor="email">Email</Label>
						<Input type="email" id="email" placeholder="Enter your email here" />
					</li>
					<li>
						<Label htmlFor="age">Edad</Label>
						<Input type="number" id="age" placeholder="Enter your phone here" />
					</li>
					<li>
						<Label htmlFor="role">Rol</Label>
						<Select id="role">
							<option id='defaultOption' value='1'>Seleccione una opción</option>
							<option value='2'>Admin</option>
							<option value='3'>Profesor</option>
							<option value='4'>Product Owner</option>
						</Select>
					</li>
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