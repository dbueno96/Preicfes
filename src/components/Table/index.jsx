import React from 'react'
import { capitalize } from '../../utils/utils'
import { Container, Table, Row, TableBody, TableHead, Head, Cell, IconsDiv, NoData, actionStyles } from './styles'
import { TiPen } from 'react-icons/ti'
import { BsFillTrashFill } from 'react-icons/bs'
import { AiFillEye } from 'react-icons/ai'
import { useSortableData } from '../../hooks/useSortableData'
import { useFilter } from '../../hooks/useFilter'


const matchActionToButton = (key) => {
	return {
		EDIT: <TiPen key={key} css={actionStyles} />,
		DELETE: <BsFillTrashFill key={key} css={actionStyles} />,
		VIEW: <AiFillEye key={key} css={actionStyles} />,

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
	const { span } = props
	return (
		<Tbody>
			{
				span ?
					<Row>
						<Cell colSpan={span}>
							<NoData>
								No se encontraron registros para mostrar
							</NoData>
						</Cell>
					</Row>
					: props.items.map((row, i) => (
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
	const { items, query } = props
	const { sortedItems, columnSort, sortedField } = useSortableData({ items })
	const getClassNamesFor = (name) => {
		if (!sortedField) {
			return;
		}
		return sortedField.field === name ? sortedField.order : undefined;
	}
	const filteredItems = useFilter({ sortedItems, query })
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
				{
					filteredItems.length > 0 ?
						<Rows items={filteredItems} />
						: <Rows span={props.headers.length} />
				}
			</Table>
		</TableContainer>

	)
}

export default FullTable