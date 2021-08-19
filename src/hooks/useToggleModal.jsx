import { useState, useRef, useEffect, useCallback } from 'react'

export const useToggleModal = () => {
	const [visible, setVisible] = useState(false),
		modalRef = useRef(),
		showModal = () => setVisible(true),
		hideModal = () => setVisible(false),
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
	return { showModal, hideModal, visible, modalRef, backgroundClick }
}