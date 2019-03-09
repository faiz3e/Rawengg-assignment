import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './InputBox.style.css';

export class InputBox extends Component {
	render() {
		const { type, placeholder, disabled = false } = this.props;
		return (
			<div >
				<input type={type} placeholder={placeholder} disabled={disabled} />
			</div>
		);
	}
}

InputBox.propTypes = {
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired
}