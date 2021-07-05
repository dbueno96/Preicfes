import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { Button, NewContainer, iconStyles, ButtonText } from './styles'
import { RiAddFill } from 'react-icons/ri'
import { RouterLink } from '../../styles/globalStyles'

const New = props => {
	const { url } = useRouteMatch()
	return (
		<NewContainer>
			<Button>
				<RouterLink to={`${url}/registrar`}>
					<ButtonText>
						{`Añadir ${props.entity}`}
					</ButtonText>
					<RiAddFill css={iconStyles} />
				</RouterLink>
			</Button>
		</NewContainer>
	)
}

export default New