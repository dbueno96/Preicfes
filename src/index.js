import React from 'react'
import ReactDOM from 'react-dom'
import Nav from './components/Navbar/Navbar'
import FullTable from './components/Table/Table'
import Search from './components/Search/Search'
import New from './components/New/New'
/* import {
	globalStyles
} from './styles/globalStyles' */

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
	Nav options = {
		['Profesores', 'Cursos', 'Estudiantes', 'Programación', 'Convenios']
	}
	/> <
	Nav options = {
		['Profesores', 'Cursos', 'Estudiantes', 'Programación', 'Convenios']
	}
	/>  <
	Search items = {
		testTable1
	}
	/>  <
	New / > <
	FullTable items = {
		testTable1
	}
	headers = {
		Object.keys(testTable1[0])
	}
	/>  </ > ,
	document.getElementById('app')
)