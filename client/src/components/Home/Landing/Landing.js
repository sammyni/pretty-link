/* jshint esversion: 6 */
/* @ts-check */
import validator from 'validator';
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { InputGroup, Form, Button, Col } from 'react-bootstrap';
import Alert from '../../Shared/Alert';

import {pretiffyUrl, unPretiffyUrl} from '../../../redux/actions';

import axios from '../../../helpers/axios';

// Styles
import './Landing.scss';

class Landing extends Component {
	constructor(props) {
		super(props);

		this.state = {
			validated: false,
			isValid: null,
			dirtyUrl: '',
		};

		this.updateInput = this.updateInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	updateInput(e) {
		this.setState({
			isValid: validator.isURL(e.target.value)
		});
		unPretiffyUrl(e.target.value);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.handleDirty(e.currentTarget);
	}

	handleDirty (form) {
		axios.withoutAuthPost ('/pretty', {url: this.state.dirtyUrl})
			.then(({ data, status }) => {
				if(data.status === 'SUCCESS') {
					pretiffyUrl(data.url);
					return;
				}
			})
			.catch(err => {
				console.log(err);
			});
	}

	render() {

		return (
			<div id="home-landing" className="landing-wrapper">
				<div className="landing-center-wrapper">
					<div className="landing-center">
						<div className="container form-wrapper">

							<h1>Simply pretiffy it</h1>
							
							<Form
								noValidate
								validated={this.state.validated}
								onSubmit={this.handleSubmit}
								className="url-form">
								<Form.Row>
									<Form.Group as={Col} md="12" controlId="prettyUrl">
										<InputGroup
											className="url-input mb-3"
											size="lg">
											<Form.Control
												required
												type="text"
												name="dirtyUrl"
												className={this.state.isValid === false ? 'is-invalid' : ''}
												value={this.props.url.dirtyUrl}
												placeholder="Enter url"
												aria-label="Recipient's username"
												aria-describedby="basic-addon2"
												onChange={this.updateInput}
											/>
											<InputGroup.Append>
												<Button
													type="submit"
													variant="secondary"
													disabled={this.state.isValid !== true ? 'disabled' : ''}>
													<span className="hide-sm">PRETIFFY&nbsp;</span>
													<i className="fa fa-sign-in"/>
												</Button>
											</InputGroup.Append>
											<Form.Control.Feedback type="invalid">
												Valid URL is required.
											</Form.Control.Feedback>
										</InputGroup>
									</Form.Group>
								</Form.Row>
								
							</Form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
/*
Landing.propTypes = {

};
*/

const mapStateToProps = state => ({
	url: state.url
})

export default  connect(mapStateToProps)(Landing);
