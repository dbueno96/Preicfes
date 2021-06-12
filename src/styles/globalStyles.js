import styled, {
	createGlobalStyle
} from 'styled-components'

import {
	Link
} from 'react-router-dom'
export const GlobalStyles = createGlobalStyle `
    html {
        font-family: Courier New, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    *, *:before, *:after {
      }

    body {
			background: ${props=> props.theme.bg.alt};
			height: 100vh;
			margin: 0 auto;
			max-width: 70rem;
			overscroll-behavior: none;
			width: 100%;
			
		  *::-webkit-scrollbar {
			  width: 5px;
			  padding-left:5px;
		  }

		  *::-webkit-scrollbar-track {
			  background: #f2f2f2;
			  border-radius: 15px;
		  }
		  *::-webkit-scrollbar-thumb {
			  background: #888;
			  border-radius: 15px;
		  }
		  *::-webkit-scrollbar-thumb:hover {
			background: #555;
		  }
	}
`
export const RouterLink = styled(Link)`
	text-decoration: none;
	color: ${props => props.color  || 'inherit;'}
`