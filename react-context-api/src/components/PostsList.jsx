import React, { useContext } from 'react';  
import { PostContext } from '../contexts/PostContext'; 

const PostsList = () => {  
    const { posts } = useContext(PostContext);  

    return (  
        <ul>  
            {posts.map(post => (  
                <li key={post.id}>  
                    <h2>{post.title}</h2>  
                    <p>{post.content}</p>  
                    <span>{post.category}</span>  
                </li>  
            ))}  
        </ul>  
    );  
};  

export default PostsList;  