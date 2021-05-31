import React from 'react'
import DashItem from '../DashItem'
import { Container, List, ListItem } from './styles'

const DashBoard = props => {
	const { items, imgs } = props
	return (
		<Container>
			<List>
				{
					items.map((item, i) => (
						<ListItem key={item}>
							<DashItem title={item} img={imgs[i]} />
						</ListItem>
					))
				}
			</List>
		</Container>
	)
}

export default DashBoard