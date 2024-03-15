import {useEffect, useState} from "react";
import Post from "./Post";
export default function PostCatalog() {
    const [data, setData] = useState([]);

    const fetchPosts = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        setData(data);
    }

    useEffect( () => {
        fetchPosts().catch(console.error)
    }, []);


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