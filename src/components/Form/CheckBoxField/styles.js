import styled from 'styled-components'

export const Input = styled.input.attrs(props => ({
	type: props.type
}))
`
	-webkit-appearance: none;
	height: 1.2rem;
	width: 1.2rem;
	border: 1px solid black;
	border-radius: 2px;
	&:hover {
		box-shadow: 1px 3px 10px rgb(7 64 77);
	}
	&:checked {
		background: rgba(7,64,77,1);
	}

`

export const P = styled.p `
	flex: 1 0 100px;
	max-width: 120rem;

`