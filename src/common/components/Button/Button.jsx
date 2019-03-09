import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './button.style.css'

export class Button extends Component {
	render() {
		const { title, onClicked } = this.props;
		return (
			<div >
				<button
					className="ghost"
					id="signIn"
					onClick={onClicked()}
				>{title || 'No Text as Props'}</button>
			</div>
		);
	}
}

Button.propTypes = {
	title: PropTypes.string.isRequired,
}
