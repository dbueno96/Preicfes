export const fillCalendar = (date, view) => ({
	0: fillDayCalendar(date),
	1: fillMonthCalendar(date),
	2: fillYearCalendar(date)
} [view])


const fillDayCalendar = date => {
	const endDay = date.clone().endOf('month').endOf('week'),
		startDay = date.clone().startOf('month').startOf('week'),
		day = startDay.clone().subtract(1, 'day'),
		calendar = []

	while (day.isBefore(endDay, 'day'))
		calendar.push(Array(7).fill(0)
			.map(() => day.add(1, 'day').clone())
		)
	return calendar
}

const fillMonthCalendar = date => {
	const startMonth = date.clone().startOf('year'),
		endMonth = date.clone().endOf('year'),
		month = startMonth.clone().subtract(1, 'month'),
		calendar = []

	while (month.isBefore(endMonth, 'month'))
		calendar.push(month.add(1, 'month').clone())
	return calendar
}

const fillYearCalendar = date => {
	const previousYears = startYearBlock(date),
		nextYears = endYearBlock(date)
	return previousYears.concat(nextYears)
}

const startYearBlock = date => {
	const year = date.clone(),
		previousYears = []

	while (parseInt(year.format('YYYY')) % 14 !== 0)
		previousYears.push(year.subtract(1, 'year').clone())
	return previousYears.reverse()
}

const endYearBlock = date => {
	const year = date.clone(),
		nextYears = [year.clone()]
	while (parseInt(year.format('YYYY')) % 14 !== 0)
		nextYears.push(year.add(1, 'year').clone())
	return nextYears
}


export const isSelected = (day, date) => (
	date.isSame(day, 'day')
)
export const beforeToday = day => (
	day.isBefore(new Date(), 'day')
)
export const isToday = day => (
	day.isSame(new Date(), 'day')
)

export const currentMonth = date => (
	!Array.isArray(date) && date.format('MMMM')
)

export const currentYear = date => (
	date.format('YYYY')
)

export const previuosMonth = date => (
	date.clone().subtract(1, 'month')
)

export const nextMonth = date => (
	date.clone().add(1, 'month')
)

export const thisMonth = date => (
	!Array.isArray(date) && date.isSame(new Date(), 'month')
)
export const isPreviousMonth = date => (
	previuosMonth(date).isSame(new Date, 'month')
)

export const nextYear = date => (
	date.clone().add(1, 'year')
)

export const previousYear = date => (
	date.clone().subtract(1, 'year')
)

export const thisYear = date => (
	date.isSame(new Date, 'year')
)

export const currentYearBlock = date => {
	const years = fillYearCalendar(date)
	return (
		`${years[0].format('YYYY')} - ${years.slice(-1).pop().format('YYYY')}`

	)
}

export const nextYearBlock = date => (
	date.clone().add(15, 'year')
)
export const previousYearBlock = date => (
	date.clone().subtract(15, 'year')
)