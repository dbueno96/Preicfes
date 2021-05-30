import React, { useRef, useState } from 'react'
import { SearchDiv, Form, Button, Input, Container, Clear, iconStyles } from './styles'
import { ImSearch } from 'react-icons/im'
import { useFilter } from '../../hooks/useFilter'


const Search = props => {
	let input = useRef(null)
	const [query, setQuery] = useState('')
	const { items } = props
	const clearText = e => {
		e.preventDefault()
		input.current.focus()
		debugger;
		input.current.value = ''
	}

	let filteredItems = items



	return (
		<Container>
			{
				filteredItems.filter(
					row => Object.values(row).filter(
						value => String(value).toUpperCase().includes(query.toUpperCase())).length > 0
				).map(row => console.log([row, query]))
			}
			<SearchDiv>
				<Form action="/" method="get">
					<label htmlFor="header-search">
					</label>
					<Input
						type="text"
						ref={input}
						placeholder="Search"
						name="s"
						onInput={e => setQuery(e.target.value)}
					/>
					<Clear onClick={e => clearText(e)} type="reset" className="reset">&times;</Clear>
					<Button type="submit">
						<ImSearch css={iconStyles}></ImSearch>
					</Button>
				</Form>

			</SearchDiv>
		</Container>
	)
}

export default Search
