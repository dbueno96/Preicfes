import styled from 'styled-components'


export const Container = styled.div `
	display: flex;
	justify-content: space-around;
	
`

export const Month = styled.div `
	background: ${props => props.theme.bg.main};
	color: ${props => props.theme.text.alt};
	border-radius: 5px;
	width: 50%;
	text-align: center;
`

export const Arrow = styled.div `
	display: flex;
	width: 10%;
	color: ${props => props.theme.text.main};
	justify-content: ${props=> props.left? 'flex-end' : null};
'
`

export const ArrowText = styled.p `
	display: flex;
	text-align: center;
`

export const MonthName = styled.p `

`