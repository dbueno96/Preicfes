import React, { useRef, useState } from 'react'
import { SearchDiv, Form, Button, Input, Container, Clear, iconStyles } from './styles'
import { ImSearch } from 'react-icons/im'
import { useFilter } from '../../hooks/useFilter'


const Search = props => {
	let input = useRef(null)
	const { query, setQuery } = props
	const clearText = e => {
		e.preventDefault()
		input.current.focus()
		input.current.value = ''
		setQuery(input.current.value)
	}

	return (
		<Container>
			<SearchDiv>
				<Form action="/" method="get">
					<label htmlFor="header-search">
					</label>
					<Input
						type="text"
						ref={input}
						placeholder="Search"
						name="s"
						value={query}
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
