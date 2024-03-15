import React from "react";
import Post from "./Post";

class PostCatalog extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    async componentDidMount() {
        await this.fetchData();
    }

    fetchData = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await res.json();
            this.setState({ data });
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        const { data } = this.state

        return (
            <div className="posts">
                <ul className="posts__list">
                    {data.map(post => {
                        return <Post key={post.id} id={post.id} title={post.title} body={post.body}/>
                    })}
                </ul>
            </div>
        )

    }
}

export default PostCatalog;