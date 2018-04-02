import React, { Component } from 'react';
import data from '../data.js';
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

class PostListItem extends React.Component {		
	render() {
		const {count, search} = this.props;
		if(search !== ""){ 
			let dataSearch = data.map((element) => {
				if(element.title.search(search) === 0) return element.title
			})

			let dataSearchNew = dataSearch.filter(function(element) {
			  return element !== undefined;
			});

			return ( 
				(dataSearchNew.length === 0) ? 
				(<Div>No items found</Div>) :
					dataSearchNew.slice(0, count).map((element, i) => (
						(<Div key = {i}>
							<Li  key={i}>
								"title: "{element}
								<br />
							</Li>
							<br />
						</Div>)
					))
			)
		}
		
		if(search === ""){return (
			data.slice(0, count).map(element => (
				<Div key = {element.id}>
					<Li key={element.id} key={element.title} key={element.body}>
					
						"title: "{element.title}
						<br />
					</Li>
					<br />
				 </Div>
			))
		)}
	}
}

export default PostListItem;