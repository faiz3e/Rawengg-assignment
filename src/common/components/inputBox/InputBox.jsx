import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './InputBox.style.css';

export class InputBox extends Component {
	render() {
		// const { type, name, placeholder, onChange, onBlur, value, disabled = false, errors } = this.props;
		const {field, form: { touched, errors },type}=this.props
		return (
			<React.Fragment >
				{/* <input
					type={type}
					name={name}
					placeholder={placeholder}
					disabled={disabled}
					onChange={onChange}
					onBlur={onBlur}
					value={value}
				/> */}
			<input type={type} {...field} {...this.props} />
					{/* <small>{errors}</small>
				 */}
				     {touched[field.name] &&
      errors[field.name] && <div className="error">{errors[field.name]}</div>}
  
			</React.Fragment>
		);
	}
}

InputBox.propTypes = {
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired
}