/* jshint esversion: 6 */

import { SET_PRETTY, SET_DIRTY } from '../actions/types';

const initialState = {
	prettyUrl: '',
	dirtyUrl: '',
};

export default function(state = initialState, action) {
	switch (action.type) {
		case SET_PRETTY:
			return {
				...state,
				prettyUrl: action.payload,
			};
		case SET_DIRTY:
			console.log(action.payload);
			return {
				...state,
				dirtyUrl: action.payload,
			};
		default:
			return state;
	}
};
