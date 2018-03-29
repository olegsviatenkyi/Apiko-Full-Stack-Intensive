import React, { Component } from 'react';
import PostListItem from "./PostListItem.js";
import data from '../data.js';
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
    this.setState({ counter: this.state.counter + 10 });
  }

  render() {
    return (
  		<div>
        <div>Users ask: <span id = "name">{this.state.counter}</span></div>
        <PostListItem count = {this.state.counter} />
        <button onClick={this.onClick}>More!</button>
      </div>
  	)
   }
  }

export default PostList;