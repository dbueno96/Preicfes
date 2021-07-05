import styled from 'styled-components'

export const Container = styled.div `
	display: flex;
	flex: auto;
	width: 100%;
	justify-content: center;
`
export const DefaultForm = styled.form `
	width: 70%;
`
export const InnerList = styled.ul `
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	flex: 1 0 220px;
	padding: 0px;
	justify-content: space-between;
	width: 100%;
`
export const Field = styled.li `
	padding-top: 0.5rem;
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	input[type=number] {
 	 -moz-appearance: textfield;
	}
`
export const OuterList = styled.ul `
	li {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
}
`

export const Label = styled.label `
	flex: 1 0 auto;
  	width: 30%;
	
	& + * {
		flex: 1 0 auto;
		width: 60%;
	}
`
export const P = styled.p `
	flex: 1 0 auto;
	max-width: auto;

`
export const Button = styled.button `
	padding: 8px 16px;
	border: none;
	background: ${props => props.type  === 'submit'? props.theme.bg.main: props.theme.bg.alt2};
	color: ${props => props.theme.text.alt};
	text-transform: uppercase;
	letter-spacing: .09em;
	border-radius: 2px;
`
export const CheckboxListItem = styled.li `
	flex: 1 30rem;
`

export const Input = styled.input `
	padding: 15px;
	border: none;
	font-family: inherit;
	border: 1px solid ${props => props.theme.bg.main};
	border-radius: 5px;
`

export const Select = styled.select `
	flex: 1 0 auto;
	padding 15px 0px;
	border: none;
	background: ${props => props.theme.bg.alt};
	border-radius: 2px;
	font-family: inherit;
	color: gray;
`
export const DefaultOption = styled.option `
	color: light-gray;
`

export const Buttons = styled.li `	
	padding-top: 1rem;
	display: flex;
	flex: 1 0 auto; 
	justify-content: space-between;

`
export const ErrorsDiv = styled.div `
	display: flex;
	flex: 1 0 auto;
	justify-content: flex-end;
	padding-top: 0.5rem;
`

export const ErrorList = styled.ul `
	display: flex; 
	flex-direction: column;
`

export const Error = styled.li `
	
`

export const Message = styled.p `
	display: flex;
	color: indianred; 
	font-size: 0.8rem; 
	margin: 0;
`