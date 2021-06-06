import React from 'react'
import ReactDOM from 'react-dom'
import Nav from './components/Navbar'
import FilterableTable from './components/FilterableTable'
import New from './components/New'
import DashItem from './components/DashItem'
import DashBoard from './components/DashBoard'
import Form from './components/Form'
import {
	GlobalStyles
} from './styles/globalStyles'
import notFound from './assets/not-found.png'
import course from './assets/course.png'
import schedule from './assets/schedule.png'
import student from './assets/student.png'
import teacher from './assets/teacher.png'
/* import {
	globalStyles
} from './styles/globalStyles' */

const imgs = [teacher, course, student, schedule, notFound]
const options = ['Profesores', 'Cursos', 'Estudiantes', 'Clases', 'Convenios']
const actions = ['EDIT', 'DELETE', 'VIEW']
const testTable1 = [{
	"name": "Vane",
	"lastName": "Vasquez",
	"age": 24,
	"email": "vanessa.vasquez@uv.edu.co",
	"role": "admin",
	actions
}, {
	"name": "Daniel",
	"lastName": "Bueno",
	"age": 25,
	"email": "daniel.bueno@uv.edu.co",
	"role": "Product Owner",
	actions
}, {
	"name": "Erika",
	"lastName": "Valois",
	"age": 26,
	"email": "erika@uv.edu.co",
	"role": "Teacher",
	actions
}, {
	"name": "Erika",
	"lastName": "Valois",
	"age": 26,
	"email": "erika@uv.edu.co",
	"role": "Teacher",
	actions
}, {
	"name": "Erika",
	"lastName": "Valois",
	"age": 26,
	"email": "erika@uv.edu.co",
	"role": "Teacher",
	actions
}, {
	"name": "Erika",
	"lastName": "Valois",
	"age": 26,
	"email": "erika@uv.edu.co",
	"role": "Teacher",
	actions
}, {
	"name": "Erika",
	"lastName": "Valois",
	"age": 26,
	"email": "erika@uv.edu.co",
	"role": "Teacher",
	actions
}, {
	"name": "Erika",
	"lastName": "Valois",
	"age": 26,
	"email": "erika@uv.edu.co",
	"role": "Teacher",
	actions
}, {
	"name": "Erika",
	"lastName": "Valois",
	"age": 26,
	"email": "erika@uv.edu.co",
	"role": "Teacher",
	actions
}, {
	"name": "Erika",
	"lastName": "Valois",
	"age": 26,
	"email": "erika@uv.edu.co",
	"role": "Teacher",
	actions
}, {
	"name": "Erika",
	"lastName": "Valois",
	"age": 26,
	"email": "erika@uv.edu.co",
	"role": "Teacher",
	actions
}, {
	"name": "Erika",
	"lastName": "Valois",
	"age": 26,
	"email": "erika@uv.edu.co",
	"role": "Teacher",
	actions
}, {
	"name": "Erika",
	"lastName": "Valois",
	"age": 26,
	"email": "erika@uv.edu.co",
	"role": "Teacher",
	actions
}, {
	"name": "Erika",
	"lastName": "Valois",
	"age": 26,
	"email": "erika@uv.edu.co",
	"role": "Teacher",
	actions
}, {
	"name": "Erika",
	"lastName": "Valois",
	"age": 26,
	"email": "erika@uv.edu.co",
	"role": "Teacher",
	actions
}, {
	"name": "Erika",
	"lastName": "Valois",
	"age": 26,
	"email": "erika@uv.edu.co",
	"role": "Teacher",
	actions
}, {
	"name": "Erika",
	"lastName": "Valois",
	"age": 26,
	"email": "erika@uv.edu.co",
	"role": "Teacher",
	actions
}, {
	"name": "Erika",
	"lastName": "Valois",
	"age": 26,
	"email": "erika@uv.edu.co",
	"role": "Teacher",
	actions
}, {
	"name": "Erika",
	"lastName": "Valois",
	"age": 26,
	"email": "erika@uv.edu.co",
	"role": "Teacher",
	actions
}]



ReactDOM.render( < >
	<
	GlobalStyles / >
	<
	Nav options = {
		options
	}
	/> <
	Nav options = {
		options
	}
	/>  <
	New / > <
	FilterableTable items = {
		testTable1
	}
	headers = {
		Object.keys(testTable1[0])
	}
	/>  <
	DashItem img = {
		notFound
	}
	title = {
		'Default'
	}
	/ >  <
	DashBoard imgs = {
		imgs
	}
	items = {
		options
	}
	/>  <
	Form / > < / > ,
	document.getElementById('app')
)