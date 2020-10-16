/* jshint esversion: 6 */
/* @ts-check */

import React, {
	Component
} from 'react';
import axios from '../../helpers/axios';

import {
	Redirect, Route
} from 'react-router-dom';

import Landing from './Landing/Landing';

import './Home.scss';



class Home extends Component {
	state = {
		redirect: {
			url: null,
			type: 'internal',
			error: ''
		},
	};
	constructor(props) {
		super(props);
		if(this.props.match.params.ref) {
			axios.withoutAuthGet(`/pretty/${this.props.match.params.ref}`);
		}

	}
	render() {
		console.log('At render', this.state);
		return ( 
			<div id="home"> <Landing /></div>
		);
	}
	componentDidMount() {
		if(this.props.match.params.ref) {
			axios.withoutAuthGet(`/pretty/${this.props.match.params.ref}`)
			.then(({ data, status }) => {
				if(data.status) {
					window.location.replace(data.url);
				}
				else {
					window.location.replace('/');
				}
			})
			.catch(err => {
				window.location.replace('/')
			});
		}
	}
}

export default Home;