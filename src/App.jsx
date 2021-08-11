import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import List from './pages/List'
import Register from './pages/Register'
import Schedule from './pages/Schedule'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/globalStyles'
import { RegularTheme } from './styles/themes'
import { useInitializeStore } from './hooks/useInitializeStore'
const App = () => {
	useInitializeStore()
	return (
		<ThemeProvider theme={RegularTheme}>
			<GlobalStyles />
			<Router>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/schedule'>
						<Schedule />
					</Route>
					<Route exact path='/:title'>
						<List />
					</Route>
					<Route exact path='/:title/registrar'>
						<Register />
					</Route>
				</Switch>
			</Router>
		</ThemeProvider >
	)
}

export default App