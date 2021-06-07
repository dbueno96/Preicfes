import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Nav from './components/Navbar'
import FilterableTable from './components/FilterableTable'
import New from './components/New'
import DashItem from './components/DashItem'
import DashBoard from './components/DashBoard'
import Form from './components/Form'
import {
	GlobalStyles
} from './styles/globalStyles'

/* import {
	globalStyles
} from './styles/globalStyles' */


const actions = ['EDIT', 'DELETE', 'VIEW']
const testTable1 = [{
	'name': 'Vane',
	'lastName': 'Vasquez',
	'age': 24,
	'email': 'vanessa.vasquez@uv.edu.co',
	'role': 'admin',
	actions
}, {
	'name': 'Daniel',
	'lastName': 'Bueno',
	'age': 25,
	'email': 'daniel.bueno@uv.edu.co',
	'role': 'Product Owner',
	actions
}, {
	'name': 'Erika',
	'lastName': 'Valois',
	'age': 26,
	'email': 'erika@uv.edu.co',
	'role': 'Teacher',
	actions
}, {
	'name': 'Erika',
	'lastName': 'Valois',
	'age': 26,
	'email': 'erika@uv.edu.co',
	'role': 'Teacher',
	actions
}, {
	'name': 'Erika',
	'lastName': 'Valois',
	'age': 26,
	'email': 'erika@uv.edu.co',
	'role': 'Teacher',
	actions
}, {
	'name': 'Erika',
	'lastName': 'Valois',
	'age': 26,
	'email': 'erika@uv.edu.co',
	'role': 'Teacher',
	actions
}, {
	'name': 'Erika',
	'lastName': 'Valois',
	'age': 26,
	'email': 'erika@uv.edu.co',
	'role': 'Teacher',
	actions
}, {
	'name': 'Erika',
	'lastName': 'Valois',
	'age': 26,
	'email': 'erika@uv.edu.co',
	'role': 'Teacher',
	actions
}, {
	'name': 'Erika',
	'lastName': 'Valois',
	'age': 26,
	'email': 'erika@uv.edu.co',
	'role': 'Teacher',
	actions
}, {
	'name': 'Erika',
	'lastName': 'Valois',
	'age': 26,
	'email': 'erika@uv.edu.co',
	'role': 'Teacher',
	actions
}, {
	'name': 'Erika',
	'lastName': 'Valois',
	'age': 26,
	'email': 'erika@uv.edu.co',
	'role': 'Teacher',
	actions
}, {
	'name': 'Erika',
	'lastName': 'Valois',
	'age': 26,
	'email': 'erika@uv.edu.co',
	'role': 'Teacher',
	actions
}, {
	'name': 'Erika',
	'lastName': 'Valois',
	'age': 26,
	'email': 'erika@uv.edu.co',
	'role': 'Teacher',
	actions
}, {
	'name': 'Erika',
	'lastName': 'Valois',
	'age': 26,
	'email': 'erika@uv.edu.co',
	'role': 'Teacher',
	actions
}, {
	'name': 'Erika',
	'lastName': 'Valois',
	'age': 26,
	'email': 'erika@uv.edu.co',
	'role': 'Teacher',
	actions
}, {
	'name': 'Erika',
	'lastName': 'Valois',
	'age': 26,
	'email': 'erika@uv.edu.co',
	'role': 'Teacher',
	actions
}, {
	'name': 'Erika',
	'lastName': 'Valois',
	'age': 26,
	'email': 'erika@uv.edu.co',
	'role': 'Teacher',
	actions
}, {
	'name': 'Erika',
	'lastName': 'Valois',
	'age': 26,
	'email': 'erika@uv.edu.co',
	'role': 'Teacher',
	actions
}, {
	'name': 'Erika',
	'lastName': 'Valois',
	'age': 26,
	'email': 'erika@uv.edu.co',
	'role': 'Teacher',
	actions
}]



ReactDOM.render( < App / > ,
	document.getElementById('app')
)