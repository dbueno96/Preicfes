import styled from 'styled-components'

export const Container = styled.div `
	width: 60%; 
	max-width: 20rem;
`

export const Header = styled.div `
	background: ${props => props.theme.bg.main};
	color: ${props => props.theme.text.alt};
	justify-content: space-between;
	align-items: center; 


`

export const Body = styled.div `
	
`

export const Footer = styled.div `

`

export const CloseButton => styled.div `
	font-size: 1.6rem;
	cursor: pointer;
`