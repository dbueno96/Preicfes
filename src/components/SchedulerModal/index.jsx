import React from 'react'
import { useSelector } from 'react-redux'
import Form from '../../components/Form'
import { Container, ModalContainer, Header, Title, TitleContainer, CloseButton, Main, Side, Body, Footer } from './styles'
import { useFetchFormConfig } from '../../hooks/useFetchFormConfig'

const ModalHeader = props => {
	const { title, hideModal } = props
	return (
		<Header >
			<TitleContainer>
				<Title >
					{title}
				</Title>
			</TitleContainer>
			<CloseButton onClick={() => hideModal()} />
		</Header>
	)
}


const Modal = props => {
	const { header, main, body, footer, side, hideModal, modalRef, backgroundClick, data } = props,
		fetchData = useSelector(state => state.data)
	useFetchFormConfig('formClases')
	return (
		<Container ref={modalRef} onClick={backgroundClick}>
			<ModalContainer>
				<Side config={{ ...side }} />
				<Main config={{ ...main }}>
					<ModalHeader title={'Default title'} config={{ ...header }} hideModal={hideModal} />
					<Body config={{ ...body }} >
						{
							fetchData ?
								<Form fields={fetchData} initialValues={data} />
								: null}
					</Body>

				</Main>
				<Footer config={{ ...footer }} />
			</ModalContainer>
		</Container>
	)

}

export default Modal
