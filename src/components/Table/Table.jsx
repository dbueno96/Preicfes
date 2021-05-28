import React from 'react'
import { capitalize } from '../../utils/utils'
import { Container, Table, Row, TableBody, TableHead, Head, Cell, IconsDiv, actionStyles } from './styles'
import { TiPen } from 'react-icons/ti'
import { BsFillTrashFill } from 'react-icons/bs'
import { AiFillEye } from 'react-icons/ai'
import { useSortableData } from '../../hooks/useSortableData'


const matchActionToButton = (key) => {
	return {
		EDIT: <TiPen css={actionStyles} />,
		DELETE: <BsFillTrashFill css={actionStyles} />,
		VIEW: <AiFillEye css={actionStyles} />,

	}[key]
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
	const { items } = props
	const { sortedItems, columnSort, sortedField } = useSortableData({ items })
	const getClassNamesFor = (name) => {
		if (!sortedField) {
			return;
		}
		return sortedField.field === name ? sortedField.order : undefined;
	}
	return (
		<TableContainer>
			<Table>
				<Thead>
					<Row height={2.4}>
						{
							props.headers.map(header => (
								<Head
									onClick={() => columnSort(header)}
									key={header}
									className={getClassNamesFor(header)}
								>
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