import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import List from './pages/List'
import { GlobalStyles } from './styles/globalStyles'

const App = () => {
	return (
		<>
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
		</>
	)
}

export default App