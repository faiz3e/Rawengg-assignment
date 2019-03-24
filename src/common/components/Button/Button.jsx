import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './button.style.css'


export const Button = (props) => {
	const { title, onClicked, type, disabled = false } = props;
	return (
		<div >
			<button
				className="ghost"
				type={type}
				disabled={disabled}
				onClick={onClicked()}
			>{title || 'SOME TEXT'}</button>
		</div>
	);
}

Button.propTypes = {
	title: PropTypes.string.isRequired,
}
