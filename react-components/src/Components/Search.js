import React, { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  margin: 15px 0;
`;

const Input = styled.input`
  width: 60%;
  height: 25px;
  padding: 5px;
  box-shadow: 0 2px 6px gray;

  :hover {
    box-shadow: 0 0 1px gray;
  }
`;

class Search extends React.Component {
	
  render() {
    const { search, handleSearch } = this.props;
    return (
      <Form>
      	<label>
	      	<span>Search: </span>
	        <Input onChange={handleSearch} value={search} />
      	</label>
      </Form>
    );
  }
}

export default Search;