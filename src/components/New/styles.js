import styled from 'styled-components'

export const NewContainer = styled.div `
	min-width: 10rem;
	width: 30%;
	height: 5rem; 
	display: flex;
	
`

export const Button = styled.button `
	background: #07404d; 
	border-radius: 5px;
	border: none; 
	height: 3rem;
	width: 50%;
    display: inherit;
    align-items: center;
	color: #fff;
	font-size: 1rem;
    font-family: 'Courier New';
	min-width: fit-content;
	align-self: center;
    margin: 0 0 0 auto;
	
	&:hover {
		cursor: pointer;
	}
`
export const ButtonText = styled.p `
	width: 100%;
`
export const iconStyles = `
	height: 2rem;
	width: 2rem; 
	color: #fff;
	margin: 0 0 0 auto;
	
`