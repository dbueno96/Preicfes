import { useState, useMemo } from 'react'
import { capitalize } from '../utils/utils'

export const useSortableData = params => {

	const [sortedField, setSortedField] = useState({
		field: null,
		order: 'ASC'
	})

	const sortedItems = useMemo(() => {
		let sortedItems = [...params.items]
		if (sortedField !== null) {
			sortedItems.sort((a, b) => {
				if (capitalize(a[sortedField.field]) > capitalize(b[sortedField.field])) {
					console.log(a[sortedField.field], b[sortedField.field])
					return sortedField.order === 'ASC' ? 1 : -1
				}
				if (capitalize(b[sortedField.field]) > capitalize(a[sortedField.field])) {
					return sortedField.order === 'ASC' ? -1 : 1
				}
				return 0
			})
		}
		return sortedItems
	}, [params.items, sortedField])


	const columnSort = field => {
		if (field === 'actions')
			return
		let order = 'ASC'
		if (sortedField.field === field && sortedField.order === 'ASC')
			order = 'DESC'
		setSortedField({ field, order })
	}

	return { sortedItems, columnSort, sortedField }
}