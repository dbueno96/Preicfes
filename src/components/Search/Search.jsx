import React, { useState } from 'react'
import { SearchDiv, Form, Button, Input, iconStyles } from './styles'
import { ImSearch } from 'react-icons/im'
const Search = props => {
	
	return (
		<SearchDiv>
			<Form action="/" method="get">
				<label htmlFor="header-search">
				</label>
				<Input
					value={searchQuery}
					onInput={e => setSearchQuery(e.target.value)}
					type="text"
					id="header-search"
					placeholder="Search"
					name="s"
				/>
				<Button type="submit">
					<ImSearch css={iconStyles}></ImSearch>
				</Button>
			</Form>
		</SearchDiv>
	)
}

export default Search
