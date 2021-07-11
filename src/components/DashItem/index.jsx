import React from 'react'
import { Container, Title, Classroom, Students, Default, Courses, Companies, Teachers } from './styles'
import { RouterLink } from '../../styles/globalStyles'


const DashItem = props => {
	const { title } = props
	const matchTitleWithIcon = title => {
		return {
			Profesores: <Teachers size={150} key={title} />,
			Estudiantes: <Students size={150} key={title} />,
			Convenios: <Companies size={150} key={title} />,
			Clases: <Classroom size={150} key={title} />,
			Cursos: <Courses size={150} key={title} />,
			Default: <Default size={150} key={title} />
		}[title]
	}
	return (
		<RouterLink to={`/${title}`}>
			<Container>
				<Title>
					{title}
				</Title>
				{
					matchTitleWithIcon(title || 'Default')
				}
			</Container>
		</RouterLink>
	)
}

export default DashItem