import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header.js";
import PostList from "./Components/PostList.js";
import PostListItem from "./Components/PostListItem.js";


class App extends Component {
  render() {

    return (
      <div className="App">
        <Header />
        <PostList />
      </div>
    );
  }
}

export default App;
