import React from 'react'
import { useBooleanState } from '../../../hooks/useBooleanState'
import { Class, ClassContainer, Container, Info, Time, TimeContainer } from './styles'

const CalendarEventSummary = ({ event }) => {
	const { course, time } = event,
		state = useBooleanState(false),
		mouseOver = state.value,
		mouseEntered = state.activate,
		mouseOut = state.deactivate

	return (
		<Container>
			<Info onMouseEnter={mouseEntered}
				onMouseLeave={mouseOut}>
				<TimeContainer>
					<Time>
						{time}
					</Time>
				</TimeContainer>
				<ClassContainer>
					<Class mouseOver={mouseOver}>
						{course}
					</Class>
				</ClassContainer>
			</Info>
		</Container>
	)
}

export default CalendarEventSummary