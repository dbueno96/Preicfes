import React, { useState } from 'react'
import { capitalize } from '../../utils/utils'
import { Container, Table, Row, TableBody, TableHead, Head, Cell, IconsDiv, actionStyles } from './styles'
import { TiPen } from 'react-icons/ti'
import { BsFillTrashFill } from 'react-icons/bs'
import { AiFillEye } from 'react-icons/ai'
import { IconContext } from 'react-icons'


const matchActionToButton = (key) => {
	const icon = {
		EDIT: <TiPen css={actionStyles} />,
		DELETE: <BsFillTrashFill css={actionStyles} />,
		VIEW: <AiFillEye css={actionStyles} />,

	}[key]
	return (

		<IconContext.Provider value={{}}>
			{
				icon
			}
		</IconContext.Provider>
	)
}

const IconContainer = props => {
	const { children } = props
	return (
		<IconsDiv>
			{children}
		</IconsDiv>
	)
}

const Rows = props => {
	return (
		<>
			<Tbody>
				{
					props.items.map((row, i) => (
						<Row key={i}>
							{
								Object.keys(row).map(key => (
									<Cell key={key}>
										{
											key === 'actions' ?
												<IconContainer>
													{
														row[key].map(action => (matchActionToButton(action)))
													}
												</IconContainer>
												: capitalize(row[key])
										}
									</Cell>
								))
							}
						</Row>
					)
					)
				}
			</Tbody>
		</>
	)
}

const Tbody = props => {
	return (
		<TableBody>
			{props.children}
		</TableBody>
	)
}

const Thead = props => {
	return (
		<TableHead>
			{props.children}
		</TableHead>
	)
}

const TableContainer = props => {
	return (
		<Container>
			{props.children}
		</Container>
	)
}


export const FullTable = props => {
	const [sortedField, setSortedField] = useState({
		field: null,
		order: 'ASC'
	})
	let sortedItems = [...props.items]

	sortedItems.sort((a, b) => {
		if (capitalize(a[sortedField.field]) > capitalize(b[sortedField.field])) {
			console.log(a[sortedField.field], b[sortedField.field])
			return sortedField.order === 'ASC' ? 1 : -1
		}
		if (capitalize(b[sortedField.field]) > capitalize(a[sortedField.field])) {
			return sortedField.order === 'ASC' ? -1 : 1
		}
		return 0
	})

	const columnSort = field => {
		let order = 'ASC'
		if (sortedField.field === field && sortedField.order === 'ASC')
			order = 'DESC'
		setSortedField({ field, order })
	}
	return (
		<TableContainer>
			<Table>
				<Thead>
					<Row>
						{
							props.headers.map(header => (
								<Head
									onClick={() => columnSort(header)}
									key={header}>
									{
										capitalize(header)
									}
								</Head>
							))
						}
					</Row>
				</Thead>
				<Rows items={sortedItems} />
			</Table>
		</TableContainer>

	)
}

export default FullTable