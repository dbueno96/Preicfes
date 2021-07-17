import React from 'react'
import Navbar from '../../components/Navbar'
import DashBoard from '../../components/DashBoard'
import Schedule from '../Schedule'
import { RouterLink } from '../../styles/globalStyles'

const Home = () => {
	const items = ['Profesores', 'Cursos', 'Estudiantes', 'Clases', 'Convenios']
	return (
		<>
			<Navbar options={items} />
			<DashBoard items={items} />
			<RouterLink to={'/schedule'} >
				Hola
			</RouterLink>

		</>
	)
}

export default Home