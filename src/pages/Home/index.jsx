import React from 'react'
import Navbar from '../../components/Navbar'
import DashBoard from '../../components/DashBoard'


const Home = () => {
	const items = ['Profesores', 'Cursos', 'Estudiantes', 'Clases', 'Convenios']
	return (
		<>
			<Navbar options={items} />
			<DashBoard items={items} />
		</>
	)
}

export default Home