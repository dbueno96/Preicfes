import { useMemo } from 'react'

export const useFilter = (params) => {
	const { sortedItems, query } = params

	return useMemo(() =>
		sortedItems.filter(item => Object.values(item).filter(
			value => String(value).toUpperCase().includes(query.toUpperCase())).length > 0
		)
	)
}