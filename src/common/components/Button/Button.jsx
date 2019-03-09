import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './button.style.css'

export class Button extends Component {
	render() {
		const { title, onClicked, type ,disabled=false} = this.props;
		return (
			<div >
				<button
					className="ghost"
					id="signIn"
					type={type}
					disabled={disabled}
					onClick={onClicked()}
				>{title || 'SOME TEXT'}</button>
			</div>
		);
	}
}

Button.propTypes = {
	title: PropTypes.string.isRequired,
}
