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
export const DayContainer = styled.div `
	display: flex;
	width: 100%;
	height: 100%;
	min-height: 3rem;
	border-radius: 5px;
	color: ${props => props.theme.text.main};
	${props => props.selected? 
		`background: ${props.theme.text.alt};
		border-radius: 5px;` : null}
	${props => props.before? 
		`color: ${props.theme.text.disabled};`
		: null }
	${props => props.today? 
		`border: 1px solid ${props.theme.text.main};`
		: null }
`
export const Day = styled.div `
	display: flex;
	padding: 0.2rem;
	width: 100%;
	height: 100%;
	background-color: inherit;
	color:inherit;
	border-radius: inherit;
`

export const SelectedDay = styled.div `
	display: flex;
	padding: 0;
	height: 100 % ;
	color: inherit;
`

export const Week = styled.div `
	display: flex;
	width: 100 % ;
	justify-content: space-between;
`

export const DateNumber = styled.p `
	display: flex;
	background: inherit;
`
export const WeekDays = styled.div `
	display: flex; 

`
export const WeekDayContainer = styled.div `
	display: flex;
	border-bottom: 1px solid ${props => props.theme.text.main};
	width: 100%;
	height: 100%;
	min-height: 5rem;	
	&:hover {
		cursor: default;
	}
`
export const DayName = styled.div `
	text-align: center;
	align-self: center;
	width: 100%;
	color: ${props => props.theme.text.main};
	&:hover {
		cursor: default;
	}
`

export const EventListContainer = styled.div `
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
`