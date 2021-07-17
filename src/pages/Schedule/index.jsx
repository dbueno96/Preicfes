import React from 'react'
import Navbar from '../../components/Navbar'
import Calendar from '../../components/Calendar'

const Schedule = () => {
	const items = ['Profesores', 'Cursos', 'Estudiantes', 'Clases', 'Convenios']
	return (
		<>
			<Navbar options={items} />
			<Calendar />
		</>
	)
}

export default Schedule