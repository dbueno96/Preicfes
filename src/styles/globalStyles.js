import {
	createGlobalStyle
} from 'styled-components'

export const GlobalStyles = createGlobalStyle `
    html {
        font-family: Courier New, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    *, *:before, *:after {
      }

    body {
        body {
            background: #f0f0f0;
            height: 100vh;
            margin: 0 auto;
            max-width: 500px;
            overscroll-behavior: none;
            width: 100%;
          }
    }
`