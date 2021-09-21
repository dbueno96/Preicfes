import React from 'react'
import Header from '../Header'
import Modal from '../../SchedulerModal'
import CalendarEventSummary from '../Event'
import { beforeToday, isToday, isSelected } from '../utils'
import { useToggleModal } from '../../../hooks/useToggleModal'
import { Container, Week, Day, DateNumber, DayContainer, WeekDays, DayName, WeekDayContainer } from './styles'
import { useFetchScheduledEvents } from '../../../hooks/useFetchScheduledEvents'
import { useScheduledEventCheck } from '../../../hooks/useScheduledEventCheck'




const DayHeader = () => (
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
)

const CalendarWeek = ({ i, showModal, week, date }) => (
	<Week key={i}>
		{
			week.map(day => (
				<CalendarDay
					date={date}
					key={day.format('D').toString()}
					showModal={showModal}
					day={day} />

			))
		}
	</Week>
)

const CalendarDay = ({ day, date, showModal }) => {
	const { dateEvents } = useScheduledEventCheck({ day: day })
	return (
		<DayContainer
			selected={isSelected(day, date)}
			before={beforeToday(day)}
			today={isToday(day)}
			onClick={() => showModal(day)}
			key={day.format('D').toString()}>
			<Day >
				<DateNumber>
					{
						day.format('D').toString()
					}
				</DateNumber>
				{
					isToday(day) ?
						<CalendarEventSummary />
						: null

				}
				{
					dateEvents && dateEvents.map(event => (
						<CalendarEventSummary key={JSON.stringify(event).trim()} event={event} />
					))
				}
			</Day>
		</DayContainer>
	)
}

const DayCalendar = props => {
	const { date, setDate, calendar, setCalendar, view, setView } = props,
		{ showModal, hideModal, visible, modalRef, backgroundClick, data } = useToggleModal()
	useFetchScheduledEvents(date)
	return (
		<Container>
			<Header setDate={setDate} date={date} view={view} setView={setView} setCalendar={setCalendar} />
			<DayHeader />
			{
				calendar[0].map && calendar.map((week, i) => (
					<CalendarWeek key={i} week={week} showModal={showModal} date={date} />
				))
			}
			{
				visible ?
					<Modal visible={visible} hideModal={hideModal} modalRef={modalRef} backgroundClick={backgroundClick} data={data} />
					: null
			}

		</Container >
	)
}

export default DayCalendar