import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 60%;
  margin-bottom: 15px;
  height: 30px;
  font-size: 90%;


  :hover {
    box-shadow: 0 4px 8px #b3e6ff;
    font-size: 100%;
    color: #008ae6;
    cursor: pointer
  }
`;

class MoreButton extends React.Component {
	render() {
	const {click} = this.props;
	return (
		<div>
			<Button onClick={click}>More!</Button>
		</div>
	)}
};

export default MoreButton;