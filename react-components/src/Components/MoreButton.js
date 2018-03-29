import React, { Component } from 'react';

class MoreButton extends React.Component {
	render() {
	const {click} = this.props;
	return (
		<div>
			<button onClick={click}>More!</button>
		</div>
	)}
};

export default MoreButton;
