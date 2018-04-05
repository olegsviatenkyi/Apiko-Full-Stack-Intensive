import React, { Component } from 'react';
import logo from '../logo.svg';

const Header = () => {
	return (
	<header className="App-header">
		<img src={logo} className="App-logo" alt="logo" />
		<h1 className="App-title">Full-Stack Intensive</h1>
		<h2>React Component Lifecycle</h2>
	</header>
	);
};
export default Header;