import React from 'react'
import ReactDOM from 'react-dom'
import {
	Provider
} from 'react-redux'
import store from './redux/store'
import App from './App'

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



ReactDOM.render( <
	Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
)