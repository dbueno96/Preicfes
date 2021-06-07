import React from 'react'
import Navbar from '../../components/Navbar'
import DashBoard from '../../components/DashBoard'

import notFound from '../../assets/not-found.png'
import course from '../../assets/course.png'
import schedule from '../../assets/schedule.png'
import student from '../../assets/student.png'
import teacher from '../../assets/teacher.png'

const Home = () => {

	const imgs = [teacher, course, student, schedule, notFound]
	const items = ['Profesores', 'Cursos', 'Estudiantes', 'Clases', 'Convenios']
	return (
		<>
			<Navbar options={items}/>
			<DashBoard items={items} imgs={imgs} />
		</>
	)
}

export default Home