import React from 'react'
import Button from '../Button'
import { IconContext } from 'react-icons'
import { FaUserCircle } from 'react-icons/fa'
import { Navbar, Logo, NavList, ListItem, UserIconStyles } from './styles'

const List = (props) => (
	<NavList>
		{
			props.items.map(item => (
				<ListItem key={item}>
					<Button display={item}>
					</Button>
				</ListItem>
			))}
	</NavList>
)

const Nav = (props) => {

	return (
		<Navbar>
			<Logo />
			<List
				items={props.options}>
			</List>
			<IconContext.Provider value={{ style: UserIconStyles }}>
				<FaUserCircle />
			</IconContext.Provider>
		</Navbar>
	)
}

export default Nav