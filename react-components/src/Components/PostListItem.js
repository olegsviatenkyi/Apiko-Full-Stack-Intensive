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

const H3 =styled.h3`
	margin: 20px auto 0;
`;
const Loader = styled.div`
	margin: 10px auto;
	border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid blue;
  border-right: 16px solid green;
  border-bottom: 16px solid red;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;

  @-webkit-keyframes spin {
	  0% { -webkit-transform: rotate(0deg); }
	  100% { -webkit-transform: rotate(360deg); }
	}

	@keyframes spin {
	  0% { transform: rotate(0deg); }
	  100% { transform: rotate(360deg); }
	}
`;

const API = "https://jsonplaceholder.typicode.com/";

const fetchData = entity =>
  fetch(API + entity).then(response => response.json());

class PostListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoading: true
    };
  }
  componentDidMount() {
    setTimeout(() => {
      Promise.all([fetchData("posts")]).then(
        ([posts]) => {
          this.setState({
            posts,
            isLoading: false
          });
        }
      );
    }, 5000);
  }
  shouldComponentUpdate(nextProps, nextState) {
    return ( 
    	this.props.count !== nextProps.count ||
    	this.props.search !== nextProps.search ||
    	this.state.posts.map(element => element.title) !== nextState.posts.map(element => element.title)  
    )
  }
  render() {
    const { posts, isLoading, } = this.state;
    const {count, search} = this.props;
    if (isLoading) {
    	return <div><H3>Loading...</H3><Loader></Loader></div>;
    }
    if(search === ""){ 
    	return (
	      <div>
	        <ul>{posts.slice(0, count).map(element => 
	        	<Div key={element.id}>
	        		<Li key={element.id}>{element.title}</Li>
	        		<br />
	        	</Div>)}
	        </ul>
	      </div>
    	);
    }
		
		if(search !== ""){ 
			let dataSearch = posts.map(element => {
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
							<Li  key={i}>{element}
							</Li>
							<br />
						</Div>)
					))
			)
		}
  }
}

export default PostListItem;