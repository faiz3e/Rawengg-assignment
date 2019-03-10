import React, { Component } from 'react';

import './InputBox.style.css';

export class InputBox extends Component {
	render() {
		const { field, form: { touched, errors }, type, disable = false } = this.props
		return (
			<React.Fragment >
				<input type={type} {...field} {...this.props} disabled={!!disable} />
				{touched[field.name] &&
					errors[field.name] && <div className="error">{errors[field.name]}</div>
				}

			</React.Fragment>
		);
	}
}
