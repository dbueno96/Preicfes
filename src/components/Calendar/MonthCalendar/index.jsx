import React from 'react'
import Header from '../Header'
import { Container, MonthContainer, Month, MonthBox, MonthName } from './styles'
import { currentMonth, thisMonth } from '../utils'

const MonthCalendar = props => {
	const { date, setDate, setCalendar, calendar, view, setView } = props,
		handleMonthClick = month => {
			setDate(month)
			setView(0)
		}
	return (
		<Container>
			<Header setDate={setDate} date={date} view={view} setView={setView} setCalendar={setCalendar} />
			<MonthContainer>
				{calendar.map(month => (
					<Month
						key={month}
					>
						<MonthBox
							selected={thisMonth(month)}
							onClick={() => handleMonthClick(month)}
						>
							<MonthName>
								{currentMonth(month)}
							</MonthName>
						</MonthBox>
					</Month>

				))}
			</MonthContainer>

		</Container >
	)
}

export default MonthCalendar