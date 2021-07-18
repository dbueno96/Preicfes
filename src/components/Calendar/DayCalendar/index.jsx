import React from 'react'
import Header from '../Header'
import { beforeToday, isToday, isSelected } from '../utils'
import { Container, Week, Day, DateNumber, DayContainer, WeekDays, DayName, WeekDayContainer } from './styles'

const DayCalendar = props => {
	const { date, setDate, calendar, setCalendar, view, setView } = props
	console.log('Days Calendar: ', calendar)

	return (
		<Container>
			<Header setDate={setDate} date={date} view={view} setView={setView} setCalendar={setCalendar} />
			<WeekDays >
				{
					['LU', 'MA', 'MI', 'JU', 'VI', 'SA', 'DO'].map(day => (
						<WeekDayContainer key={day}>
							<DayName >
								{day}
							</DayName>

						</WeekDayContainer>
					))
				}
			</WeekDays>
			{
				calendar[0].map && calendar.map((week, i) => (
					<Week key={i}>
						{
							week.map(day => (
								<DayContainer
									selected={isSelected(day, date)}
									before={beforeToday(day)}
									today={isToday(day)}
									onClick={() => !beforeToday(day) && setDate(day)}
									key={day.format('D').toString()}>
									<Day >
										{
											<DateNumber>
												{
													day.format('D').toString()
												}
											</DateNumber>
										}
									</Day>
								</DayContainer>
							))
						}
					</Week>
				))
			}
		</Container >
	)
}

export default DayCalendar