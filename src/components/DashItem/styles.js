import styled from 'styled-components'


export const Container = styled.div `
	display: flex;
    flex-direction: column;
	width: 7rem; 
	height: 12rem;
	align-items: center;
	border-radius: 5px;
	border: 2px solid transparent;
	&:hover {
		border-radius: 5px;
		border: 1px solid #07404d;
	}
`


export const Title = styled.h1 `
	font-family: Courier New; 
	font-size: 1rem;
`

export const Pict = styled.picture `
	height: 100%;
	width: 100%;
`

export const Img = styled.img `
	
	height: 100%;
	width: 100%;	

	
`