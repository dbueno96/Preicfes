import React, { useState } from 'react'
import FullTable from '../Table'
import Search from '../Search'
import { Container } from './styles'


const FilterableTable = props => {
	const { headers, items } = props
	const [query, setQuery] = useState('')

	let filteredItems = items


	filteredItems.filter(
		row => Object.values(row).filter(
			value => String(value).toUpperCase().includes(query.toUpperCase())).length > 0
	)

	return (
		<Container>

			<Search setQuery={setQuery} query={query} items={items} />
			<FullTable headers={headers} items={filteredItems} query={query} />
		</Container>
	)
}

export default FilterableTable