import React from "react";

class Post extends React.Component {
    render() {
        return (
            <li className="posts_single-post" data-post-id={this.props.id}>
                <h3 className="posts__post-title">{this.props.title}</h3>
                <p className="posts__post-description">{this.props.body}</p>
            </li>
        )
    }
}

export default Post;