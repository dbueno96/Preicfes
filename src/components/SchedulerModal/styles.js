import styled from 'styled-components'
import {
	MdClose
} from 'react-icons/md'

export const Container = styled.div `
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.3);
	display: flex;
	position: absolute;
	top: 0;
	left: 0;
	justify-content: center;
	align-items: center;
`
export const ModalContainer = styled.div `
	display: flex;
	background: white;	
	width: 65%;
	height: 80%;
	border-radius: 5px;
	min-height: 20rem;
	cursor: default;
`
export const TitleContainer = styled.div `
	display: flex;
	justify-content: center;
	height: 2rem;
	width: 100%;
`
export const Title = styled.p `
	display: flex;
	text-align: center; 
	vertical-align: middle;
`

export const CloseButton = styled(MdClose) `
	cursor: pointer;
	width: 1.3rem;
	height: 1.3rem;
	z-index: 10;
	color: gray;
	margin-left: auto;
`

export const Header = styled.div `
	display: flex;
	width: 100%;
`
export const Main = styled.div `
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
`

export const Body = styled.div `
	display: flex;
	height: 100%;
	overflow: auto;
`

export const Footer = styled.div `
`

export const Side = styled.div `
	display:flex;
`