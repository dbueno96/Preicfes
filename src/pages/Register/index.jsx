import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import Form from '../../components/Form'
import Navbar from '../../components/Navbar'
import Title from '../../components/Title'
import { formEmpleados, formClases, formConvenio, formCurso, formEstudiante } from '../../testData'

const Register = () => {
	const { url } = useRouteMatch(),
		items = ['Profesores', 'Cursos', 'Estudiantes', 'Clases', 'Convenios'],
		form = (path) => {

			const entity = path.split('/')[1]
			console.log(entity)
			return {
				Profesores: formEmpleados,
				Clases: formClases,
				Convenios: formConvenio,
				Estudiantes: formEstudiante,
				Curso: formCurso
			}[entity]
		}
	return (
		<>
			<Navbar options={items} />
			<Title title={url} />
			<Form fields={form(url)} />
		</>

	)
}

export default Register