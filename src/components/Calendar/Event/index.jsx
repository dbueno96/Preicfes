import React from 'react'
import { useBooleanState } from '../../../hooks/useBooleanState'
import { Class, ClassContainer, Container, Info, Time, TimeContainer } from './styles'

const CalendarEventSummary = () => {
	const state= useBooleanState(false),
		mouseOver = state.value,
		mouseEntered = state.activate,
		mouseOut = state.deactivate

	return (
		<Container>
			<Info onMouseEnter={mouseEntered}
				onMouseLeave={mouseOut}>
				<TimeContainer>
					<Time>
						3:00pm
					</Time>
				</TimeContainer>
				<ClassContainer>
					<Class mouseOver={mouseOver}>
						Lectura crítica
					</Class>
				</ClassContainer>
			</Info>

		</Container>
	)
}

export default CalendarEventSummary