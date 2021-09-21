import { useSelector } from 'react-redux'


export const useScheduledEventCheck = ({ day }) => {
	const events = useSelector(state => state.events),
		isEmpty = obj => {
			for (let i in obj)
				return false
			return true
		}, dateEvents = (day, events) => {
			const year = day.format('YYYY'),
				month = day.format('MM'),
				parseDay = day.format('DD')
			if (!events)
				return
			if (!events[year])
				return
			if (!events[year][month])
				return
			return events[year][month][parseDay]
		}
	return !isEmpty(events) && { dateEvents: dateEvents(day, events) }
}