import React from 'react'
import DashItem from '../DashItem'
import { Container, List, ListItem } from './styles'

const DashBoard = props => {
	const { items } = props
	return (
		<Container>
			<List>
				{
					items.map((item) => (
						<ListItem key={item}>
							<DashItem title={item} />
						</ListItem>
					))
				}
			</List>
		</Container>
	)
}

export default DashBoard