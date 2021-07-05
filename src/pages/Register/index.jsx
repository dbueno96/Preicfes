import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import Form from '../../components/Form'
import Navbar from '../../components/Navbar'
import Title from '../../components/Title'

const Register = () => {
	const { url } = useRouteMatch(),
		items = ['Profesores', 'Cursos', 'Estudiantes', 'Clases', 'Convenios']
	return (
		<>
			<Navbar options={items} />
			<Title title={url} />
			<Form />
		</>

	)
}

export default Register