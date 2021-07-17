import React from 'react'
import { Container, Month, Arrow, ArrowText, MonthName } from './styles'
import { currentMonth, currentYearBlock, currentYear, previuosMonth, nextMonth, nextYear, previousYear, previousYearBlock, nextYearBlock } from '../utils'
const Header = props => {
	const { date, setDate, setView, view, setCalendar } = props,
		handleHeaderClick = () => {
			if (view === 0) {
				setView(1)
				setCalendar([])
			}
			if (view === 1) {
				setView(2)
				setCalendar([])
			}
		},
		handleLeftArrowClick = () => {
			view === 0 && setDate(previuosMonth(date)) ||
				view === 1 && setDate(previousYear(date)) ||
				view === 2 && setDate(previousYearBlock(date))
		},
		handleRightArrowClick = () => {
			view === 0 && setDate(nextMonth(date)) ||
				view === 1 && setDate(nextYear(date)) ||
				view === 2 && setDate(nextYearBlock(date))
		}
	return (
		<Container>
			<Arrow
				left
				onClick={() => handleLeftArrowClick()}>
				<ArrowText >
					{String.fromCharCode(171)}
				</ArrowText>
			</Arrow>
			<Month onClick={() => handleHeaderClick()}>
				<MonthName>
					{view === 0 ? currentMonth(date) : null} {view === 0 ||
						view === 1 ? currentYear(date) : null ||
							view === 2 ? currentYearBlock(date) : null}
				</MonthName>
			</Month>
			<Arrow right onClick={() => handleRightArrowClick()} >
				<ArrowText >
					{String.fromCharCode(187)}
				</ArrowText>
			</Arrow>
		</Container>
	)
}

export default Header