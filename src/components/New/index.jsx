import React from 'react'
import { Button, NewContainer, iconStyles, ButtonText } from './styles'
import { RiAddFill } from 'react-icons/ri'


const New = props => {

	return (
		<NewContainer>
			<Button>
				<ButtonText>
					{`Añadir ${props.entity}`}
				</ButtonText>

				<RiAddFill css={iconStyles} />
			</Button>
		</NewContainer>
	)
}

export default New