import styled from 'styled-components'

export const Container = styled.div `
	
`

export const SearchDiv = styled.div `
	display: flex;
	width: 95%; 
	height: 4rem; 
`
export const Clear = styled.button `
		position: absolute;
		border: none;
		display: block;
		width: 15px;
		height: 15px;
		line-height: 16px;
		font-size: 12px;
		border-radius: 50%;
		top: 0;
		bottom: 0;
		right: 3rem;
		margin: auto;
		background: #ddd;
		padding: 0;
		outline: none;
		cursor: pointer;
		transition: .1s;
`

export const Form = styled.form `
	width: 100%;
	display: flex;

	position: relative;
`
export const Input = styled.input `
	margin: auto 0 auto auto;
	border-radius: 5px;
	box-shadow: 1px 3px 10px rgb(7 64 77);
	border: none;
	height: 1.5rem;
	width: 20%;
	transition: width 0.6s;
	font-size: 1.1rem;
    font-family: 'Courier New';
	font-color: gray;
	padding: 3px 10px;
	
	padding-right: 20px;
    box-sizing: border-box;
	&:placeholder-shown + button{
		opacity: 0;
		pointer-events: none;
	}
	&:focus{
		outline: none;
		width: 45%;
		::-webkit-input-placeholder {
			color: transparent !important;
		}
		:-moz-placeholder {
			color: transparent !important; 
		}
		::-moz-placeholder {
			color: transparent !important;
		}
		:-ms-input-placeholder { 
			color: transparent !important;
		}


	}
	&:focus-visible {
		outline:none;
		border:none;
	}
	::-webkit-input-placeholder {
		font-style: italic;
		font-size: 1.3rem;
		color: lightgray;
	}
	:-moz-placeholder {
		font-style: italic;  
		font-size: 1.3rem;
		color: lightgray;
	}
	::-moz-placeholder {
		font-style: italic;  
		font-size: 1.3rem;
		color: lightgray;
	}
	:-ms-input-placeholder {  
		font-style: italic; 
		font-size: 1.3rem;
		color: lightgray;
	}
`
export const Button = styled.button `
	height: 2.5rem;
	width: 2.5rem;
	margin: auto 0;
	background: none;
	border: none;
	&:hover {
		cursor: pointer
	}
`

export const iconStyles = `
	width: 1.3rem;
	height: 1.3rem;
	color: lightgray
`