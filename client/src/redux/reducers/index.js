/*jshint esversion: 6 */
/* @ts-check */

import { combineReducers } from 'redux';

// Reducers
import urlReducer from './urlReducer';

export default combineReducers({
	url: urlReducer,
});
