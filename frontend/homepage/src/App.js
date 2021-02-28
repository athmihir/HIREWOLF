import { useState } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
import Home from './pages/Home'
import Instructions from './pages/Instructions'
import Test from './pages/Test'
import './App.css'

function App() {

	const responseGoogle = (response) => {
		console.log(response);
		console.log(response.profileObj);
	}

	return (
		<Router>
			<Switch>
				<Route 
					path="/instructions/:testID" 
					children={<Instructions />}>
				</Route>
				<Route 
					path="/test" 
				>
					<Test />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
