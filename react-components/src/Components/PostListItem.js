import React, { Component } from 'react';
import data from '../data.js';
class PostListItem extends React.Component {
	render() {
		const {count} = this.props;
		return (
			<div>
				<ul>
					{data.slice(0, count).map(element => (
						<div key = {element.id}>
							<li key={element.id} key={element.title} key={element.body}>
								"id: "{element.id}
								<br />
								"title: "{element.title}
								<br />
								"body: "{element.body}
							</li>
							<br />
				    </div>
				  ))}
			  </ul>
			</div>
		)
	}
}

export default PostListItem;