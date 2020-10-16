/* jshint esversion: 6 */
import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

const AlertElement = props => {
	const [show, setShow] = useState(props.show);

	if (show) {
		return (
			<Alert
				variant={props.variant || 'success'}
				onClose={() => setShow(false)}
				dismissible>
				<Alert.Heading>
					{
                        props.heading ||
						props.variant.str[0].toUpperCase() + props.variant.substr(1) ||
                        'Success'
                    }
				</Alert.Heading>
				<p>{props.message}</p>
			</Alert>
		);
	}
	return '';
};

export default AlertElement;
