import React from 'react'
import { Container, Pict, Title, Img } from './styles'
import { RouterLink } from '../../styles/globalStyles'
const DashItem = props => {
	const { title, img } = props
	return (
		<RouterLink to={`/ver/${title}`}>
			<Container>
				<Title>
					{title}
				</Title>
				<Pict>
					<Img alt={title} src={img} />
				</Pict>
			</Container>
		</RouterLink>
	)
}

export default DashItem