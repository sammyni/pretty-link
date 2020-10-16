/* jshint esversion: 6 */

import { SET_PRETTY, SET_DIRTY } from './types';

export function pretiffyUrl(url) {
	return function(dispatch) {
		dispatch({
			type: SET_PRETTY,
			payload: url,
		});
	};
}

export function unPretiffyUrl(url) {
	return function(dispatch) {
		dispatch({
			type: SET_DIRTY,
			payload: url,
		});
	};
}
