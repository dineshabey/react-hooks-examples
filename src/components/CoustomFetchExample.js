import React from 'react'
import useFetch from '../hooks/useFetch';

const CoustomFetchExample = () => {
    const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/posts');

    if (loading) return <p>Loading...</p>;

    return (
        <ul>
            <h1>
                Custom Hook Example: useFetch
            </h1>
            {data.slice(0, 5).map((item) => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    );
};

export default CoustomFetchExample;

