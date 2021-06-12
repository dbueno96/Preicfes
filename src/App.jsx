import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import List from './pages/List'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/globalStyles'
import { RegularTheme } from './styles/themes'

const App = () => {
	return (
		<ThemeProvider theme={RegularTheme}>
			<GlobalStyles />
			<Router>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route path='/ver/:title'>
						<List />
					</Route>
				</Switch>
			</Router>
		</ThemeProvider >
	)
}

export default App