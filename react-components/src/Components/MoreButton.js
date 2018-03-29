import React, { Component } from 'react';
import PostList from "./PostList.js";
import data from '../data.js';

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
