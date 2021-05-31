import styled from 'styled-components'


export const Row = styled.tr `
    height: ${props => props.height || 1.2}rem;
    max-height: 2rem;
    border: 1px solid transparent;
    
    tbody &:hover {
       background: #F0F0F0;
    }
`

export const Head = styled.th `
    text-align: center;
    position: sticky;
    top: 0;
    background: #F0F0F0;
    z-index: 1;
	width: 5rem;
	height: 3rem;
	&:hover{
        cursor: pointer;
    }
	&:first-child {
		border-radius: 5px;
	}
	&:last-child { 
		border-radius: 5px;
	}
`

export const Cell = styled.td `
    text-align: center;
	&:first-child {
		border-radius: 5px;
	}
	&:last-child { 
		border-radius: 5px;
	}
`

export const Table = styled.table `
    width: 100%;
    min-width: 50%;
    border-spacing: 0px;
    border-collapse: collapse;
`
export const Container = styled.div `
    overflow-x: auto;
    max-height: 20rem;
    width: 100%;
    margin: 0 auto;
`

export const TableHead = styled.thead `
    font-size: 1.1rem;
    font-family: 'Courier New'
`
export const TableBody = styled.tbody `


`
export const IconsDiv = styled.div `
    padding: 10px 0px;
    max-height: 4rem;
`

export const NoData = styled.h1 `
	font-family: Courier New;
	font-size: 1.1rem;
	font-weight: lighter;
	font-style: italic;
	color: gray;
`
export const actionStyles = `
    height: 1.3rem;
    width: 1.3rem;
    padding: 0px 10px;
    border: 1px solid transparent;
    &:hover{
        border: 1px solid lightgray;
        cursor: pointer;
    }
`