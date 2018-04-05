import React, { Component } from 'react';
import PostListItem from "./PostListItem.js";
import MoreButton from "./MoreButton.js";
import Search from "./Search.js";

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 10, search: "" };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { counter } = this.state;
    if(this.state.counter < 100) {this.setState({ counter: this.state.counter + 10 });}
    else {this.setState({ counter: this.state.counter + 0 });}
  }
   handleSearch = event => {
    const { value } = event.target;
    console.log(value);
    if (value) {
      this.setState({ search: value });
    }
  };

  render() {
    return (
      <div>
        <Search handleSearch = {this.handleSearch} search = {this.state.search} />
        <div>Users ask: <span id = "name">{this.state.counter}</span></div>
        <div><PostListItem count = {this.state.counter} search = {this.state.search} /></div>
        <MoreButton click = {this.onClick} />
      </div>
    )
   }
  }

export default PostList;