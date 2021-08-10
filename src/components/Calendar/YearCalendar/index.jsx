import React from 'react'
import Header from '../Header'
import { Container, YearContainer, Year, YearBox, YearNumber } from './styles'
import { currentYear, thisYear } from '../utils'

const YearCalendar = props => {
	const { date, setDate, calendar, setCalendar, view, setView } = props,
		handleYearClick = year => {
			setDate(year)
			setView(1)
		}
	return (
		<Container>
			<Header setDate={setDate} date={date} view={view} setView={setView} setCalendar={setCalendar} />
			<YearContainer>
				{
					calendar.map(year => (
						<Year
							key={currentYear(year)}
						>
							<YearBox
								onClick={() => handleYearClick(year)}
								selected={thisYear(year)}
							>
								<YearNumber>
									{
										currentYear(year)
									}
								</YearNumber>
							</YearBox>
						</Year>
					))}
			</YearContainer>
		</Container >
	)
}

export default YearCalendar