import React from 'react'
import Navbar from '../../components/Navbar'
import Title from '../../components/Title'
import FilterableTable from '../../components/FilterableTable'
import New from '../../components/New'
import { useParams } from 'react-router-dom'
import { data } from '../../testData'

const List = () => {
	const { title } = useParams(),
		options = ['Profesores', 'Cursos', 'Estudiantes', 'Clases', 'Convenios'],
		items = data[title],
		headers = Object.keys(items[0])

	return (
		<>
			<Navbar options={options} />
			<Title title={title}>
				<New entity={title} />
			</Title>
			<FilterableTable items={items} headers={headers} />
		</>
	)
}

export default List