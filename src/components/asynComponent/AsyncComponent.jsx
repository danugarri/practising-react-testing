import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import './AsyncComponent.css';

export const AsyncComponent = () => {
    const [posts,setPosts] = useState([]);

    useEffect(() => {
        const apiUrl= 'https://jsonplaceholder.typicode.com/posts';
        fetch(apiUrl)
        .then(response => response.json())
        .then(data => setPosts(data));
    },[]);

  return (
    <div>
        <ul>
            {
                posts.map(post => {
                    return <li key ={post.id}>{post.title}</li>
                })
            }
        </ul>
        <button className='home-button'><Link to= '/'>Home</Link></button>
    </div>
  )
}
