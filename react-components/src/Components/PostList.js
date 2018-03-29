import React, { Component } from 'react';
import PostListItem from "./PostListItem.js";
import MoreButton from "./MoreButton.js";
import '../App.css';

let counter = 10;
class PostList extends React.Component {
  constructor() {
    super();
    this.state = { counter: 10 };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { counter } = this.state;
    if(this.state.counter < 100) {this.setState({ counter: this.state.counter + 10 });}
    else {this.setState({ counter: this.state.counter + 0 });}
  }

  render() {
    return (
  		<div>
        <div>Users ask: <span id = "name">{this.state.counter}</span></div>
        <PostListItem count = {this.state.counter} />
        <MoreButton click = {this.onClick} />
      </div>
  	)
   }
  }

export default PostList;
