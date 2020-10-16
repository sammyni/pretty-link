/*jshint esversion: 6 */
/* @ts-check */

import { createStore, compose, applyMiddleware } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';

import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

// Reducer
import rootReducer from '../reducers';

const initialState = {};

const middleware = [thunk];

const persistConfig = {
	key: 'root',
	storage,
	stateReconciler: hardSet,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
	let store = createStore(
		persistedReducer,
		initialState,
		compose(
			applyMiddleware(...middleware),
			window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
		)
	);

	let persistor = persistStore(store);

	return {
		store,
		persistor,
	};
};
