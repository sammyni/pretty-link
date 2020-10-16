/*jshint esversion: 6 */
/* @ts-check */

import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	// Redirect,
	Switch,
} from 'react-router-dom';


// Import components
import Home from './components/Home/Home';

// Redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import createStore from './redux/store';

const { store, persistor } = createStore();

export default () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/:ref" component={Home} />
						{/* <Route component={NotFound} /> */}
					</Switch>
				</Router>
			</PersistGate>
		</Provider>
	);
};
