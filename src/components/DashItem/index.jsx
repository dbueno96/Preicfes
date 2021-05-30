import React from 'react'
import { Container, Pict, Title, Img } from "./styles"
const DashItem = props => {
	const { title, img } = props
	return (
		<Container>

			<Title>
				{title}
			</Title>
			<Pict>
				<Img alt={title} src={img} />
			</Pict>
		</Container>
	)
}

export default DashItem