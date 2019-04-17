import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './button.style.css'
import { NavigationWrapper } from './NavigationWrapper';


export const Button = (props) => {
	let { title, onClicked, type, disabled = false, navigateTo = null, className = "ghost" } = props;
	return (
		<div>
			<NavigationWrapper navigateTo={navigateTo}>
				<button
					className={className}
					type={type}
					disabled={disabled}
					onClick={onClicked()}
				>{title || 'SOME TEXT'}
				</button>
			</NavigationWrapper>
		</div>
	);
}

Button.propTypes = {
	title: PropTypes.string.isRequired,
}
