import React from 'react'
import { Container, Text } from './styles'

const Title = props => {
	const { title, children } = props
	return (
		<Container>
			<Text>
				{title}
			</Text>
			{
				children
			}
		</Container>
	)
}

export default Title
