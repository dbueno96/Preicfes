import React from 'react'
import { useParams } from 'react-router-dom'

const List = () => {
	const { title } = useParams()
	console.log(title)
	return (
		<h1>{title} </h1>
	)
}

export default List