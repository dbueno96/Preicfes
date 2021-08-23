import { useState, useRef, useEffect, useCallback } from 'react'

export const useToggleModal = () => {
	const [visible, setVisible] = useState(false),
		[data, setData] = useState(null),

		modalRef = useRef(),
		showModal = (data) => {
			setVisible(true)
			setData([{
				id: 'startDate',
				value: data.format('YYYY-MM-DD')
			}])
		},
		hideModal = () => {
			setVisible(false)
			setData(null)
		},
		backgroundClick = e => {
			if (modalRef.current === e.target) {
				hideModal()
			}
		},
		keyPress = useCallback(e => {
			if (visible && e.key === 'Escape')
				setVisible(false)
		}, [setVisible, visible])

	useEffect(() => {
		document.addEventListener('keydown', keyPress)
		return () => document.removeEventListener('keydown', keyPress)
	}, [keyPress])
	return { showModal, hideModal, visible, modalRef, backgroundClick, data }
}