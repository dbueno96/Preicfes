import styled from 'styled-components'

export const Container = styled.div `
	width: 100%; 
	height: 0.8rem;
	background: ${props => props.theme.bg.main};
	display: flex;
	border-radius: 5px;
	margin-bottom: 0.2rem;
	* {
		font-size: 0.7rem;
	}
`

export const Info = styled.div `
	display: flex;
	width: 100%;
	height: 100%
`

export const TimeContainer = styled.div `
	display: flex;
	width: 30%;
	height: 100%
`

export const Slider = styled.div `
	display:flex;
	width: 100%;
`
export const ClassContainer = styled.div `
	display: flex;
	width: 70%;	
	height: 100%;
	overflow: hidden;
	position: relative;
	left: 0.5rem;	
`

export const Time = styled.span `
	display: flex;
	color: ${props => props.theme.text.alt};

	&:after {
		display:flex;
		content: "| ";
		background: ${props => props.theme.bg.main}
	}

`


export const Class = styled.span `
	color: ${props => props.theme.text.alt};
	text-overflow: ellipsis;
	display: block;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
	transform: translateX(0);
	transition: 0.5s;
	
	${props => props.mouseOver?
		`
			width: auto;
			transform: translateX(-80%);
			transition: 3s;
		` : null
}
`