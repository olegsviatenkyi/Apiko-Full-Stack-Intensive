import List from './List.js';
import { lifecycle } from 'recompose';
import PostListItem from "./PostListItem.js";

const enhancer = lifecycle({
  shouldComponentUpdate(nextProps) {
    return ( 
    	this.props.k == nextProps.k ||
    	this.props.children !== nextProps.children
    )
  }
});

export default enhancer(List);