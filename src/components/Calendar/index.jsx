import React, { useState, useEffect } from 'react'
import moment from 'moment'
import DayCalendar from './DayCalendar'
import MonthCalendar from './MonthCalendar'
import YearCalendar from './YearCalendar'
import { fillCalendar } from './utils'


const Calendar = () => {

	const [date, setDate] = useState(moment().locale('es')),
		[calendar, setCalendar] = useState([[]]),
		[view, setView] = useState(0),
		views = {
			0: <DayCalendar date={date} setDate={setDate} calendar={calendar} setCalendar={setCalendar} view={view} setView={setView} />,
			1: <MonthCalendar date={date} setDate={setDate} calendar={calendar} setCalendar={setCalendar} view={view} setView={setView} />,
			2: <YearCalendar date={date} setDate={setDate} calendar={calendar} setCalendar={setCalendar} view={view} setView={setView} />
		}
	useEffect(() => {
		setCalendar(fillCalendar(date, view))
	}, [date, view])

	return (
		views[view]

	)
}

export default Calendar