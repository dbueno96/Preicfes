import styled from 'styled-components'

export const Container = styled.div `
	display: flex;
	padding-top: 2rem;
	flex-direction: column;
	& * {
		box-sizing:border-box;
	}
	& *:hover {
		cursor: pointer;
	}
`

export const YearContainer = styled.div `
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
`

export const Year = styled.div `
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1 1 30%;
	height: 3rem;
	border-radius: 5px;
`

export const YearBox = styled.div `
	display: flex;
	width: 80%;
	height: 3rem;
	justify-content: center;
	align-content: center;
	border-radius: 5px;
	${props => props.selected? 
		`border: 1px solid ${props.theme.text.main};`
		: null }
	&:hover {
		background: ${props => props.theme.text.alt};
		border-radius: 5px;
	}
`

export const YearNumber = styled.p `
	text-align: center;
	width: 100%;
	
`