import styled from 'styled-components'
import {
	SiGoogleclassroom
} from 'react-icons/si'
import {
	GiTeacher,
	GiRead,
	GiLinkedRings,
	GiOpenBook
} from 'react-icons/gi'
import {
	BiLoaderCircle
} from 'react-icons/bi'
export const Container = styled.div `
	display: flex;
    flex-direction: column;
	width: 12rem; 
	height: 12rem;
	align-items: center;
	border-radius: 5px;
	border: 2px solid transparent;
	padding: 2px;
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

export const Classroom = styled(SiGoogleclassroom)
`
	color: ${props => props.theme.bg.alt2}; 
	&:hover {
		color: black;
	}
`
export const Teachers = styled(GiTeacher)
`
	color: ${props => props.theme.bg.alt2}; 
	&:hover {
		color: black;
	}
`

export const Companies = styled(GiLinkedRings)
`
	color: ${props => props.theme.bg.alt2}; 
	&:hover {
		color: black;
	}
`
export const Courses = styled(GiOpenBook)
`
	color: ${props => props.theme.bg.alt2}; 
	&:hover {
		color: black;
	}
`

export const Students = styled(GiRead)
`

	color: ${props => props.theme.bg.alt2}; 
	&:hover {
		color: black;
	}
`
export const Default = styled(BiLoaderCircle)
`
	color: ${props => props.theme.bg.alt2}; 
	&:hover {
		color: black;
	}
`