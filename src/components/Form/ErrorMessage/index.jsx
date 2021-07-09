import React from 'react'
import { ErrorsDiv, ErrorList, Error, Message } from '../styles'

const ErrorMessage = props => {
	const { message } = props
	return (
		<ErrorsDiv>
			<ErrorList>
				<Error>
					<Message>
						{message}
					</Message>
				</Error>
			</ErrorList>
		</ErrorsDiv>
	)
}

export default ErrorMessage