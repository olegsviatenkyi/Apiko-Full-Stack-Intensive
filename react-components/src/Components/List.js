import React, { Component } from 'react';
import styled from 'styled-components';

const Li = styled.li`
	background-color: #b3e6ff;
	border: 2px solid black;
	border-radius: 5px;
	box-shadow: 0 3px 8px gray;
	list-style-type: none;
	padding: 5px;
`;

const Div =styled.div`
	width: 70%;
	margin: auto;
`;

const List = ({children, k}) => 
	<Div key={k}>
		<Li key={k}>{children}</Li>
		<br />
	</Div>

export default List;