import React from 'react'
import Header from '../Header'
import Modal from '../../SchedulerModal'
import { beforeToday, isToday, isSelected } from '../utils'
import { useToggleModal } from '../../../hooks/useToggleModal'
import { Container, Week, Day, DateNumber, DayContainer, WeekDays, DayName, WeekDayContainer } from './styles'
import { BsPlus } from 'react-icons/bs'

const DayCalendar = props => {
	const { date, setDate, calendar, setCalendar, view, setView } = props,
		{ showModal, hideModal, visible, modalRef, backgroundClick } = useToggleModal()

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
									onClick={() => showModal()}
									key={day.format('D').toString()}>
									<Day >
										<DateNumber>
											{
												day.format('D').toString()
											}
										</DateNumber>
										<BsPlus />

									</Day>
								</DayContainer>
							))
						}
					</Week>
				))
			}
			<Modal visible={visible} hideModal={hideModal} modalRef={modalRef} backgroundClick={backgroundClick} />
		</Container >
	)
}

export default DayCalendar