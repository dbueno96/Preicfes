import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../../components/Navbar'
import Title from '../../components/Title'
import FilterableTable from '../../components/FilterableTable'
import New from '../../components/New'
import { useParams } from 'react-router-dom'
import { useFetchListData } from '../../hooks/useFetchListData'

const List = () => {
	const { title } = useParams(),
		options = ['Profesores', 'Cursos', 'Estudiantes', 'Clases', 'Convenios'],
		fetchData = useSelector(state => state.data),
		headers = fetchData && fetchData.headers,
		items = fetchData && fetchData.data
	useFetchListData(title)
	return (
		<>
			<Navbar options={options} />
			<Title title={title}>
				<New entity={title} />
			</Title>
			<FilterableTable items={items || []} headers={headers || []} />
		</>
	)
}

export default List