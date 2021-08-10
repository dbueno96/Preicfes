import React, { useState } from 'react'
import FullTable from '../Table'
import Search from '../Search'
import { Container } from './styles'


const FilterableTable = props => {
	const { headers, items } = props
	const [query, setQuery] = useState('')
	return (
		<Container>
			<Search setQuery={setQuery} query={query} items={items} />
			<FullTable headers={headers} items={items} query={query} />
		</Container>
	)
}

export default FilterableTable