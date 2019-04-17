import React, { Component } from 'react';

export class StatusMessage extends Component {
	render() {
		const { message = '' } = this.props;
		return (
			<div>
				{message.length > 0 &&
					<p style={{color:'red'}}
					>{message.toLocaleLowerCase()}</p>
				}
			</div>
		);
	}
}
