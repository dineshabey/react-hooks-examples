import React, { useEffect, useState } from 'react'

export default function FetchExample() {

    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        // Fetch posts from API when the component mounts
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => setPosts(data.slice(0, 5))); // Load first 5 posts
    }, []);

    // console.log(posts);

    return (
        <div>
            <h1>
                useEffect Example: Fetching Data on Mount

            </h1>
            <div style={{ padding: '20px' }}>
                <h3>posts</h3>
                <ul>
                    {posts.map((posts) => (
                        <li key={posts.id}>
                            <strong>{posts.title}</strong>
                            <p>{posts.body}</p>
                        </li>
                    ))}

                </ul>
            </div>
        </div>
    )
}
