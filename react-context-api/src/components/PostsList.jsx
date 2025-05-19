// src/PostsList.jsx  
import React, { useContext } from 'react';  
import { PostContext } from '../contexts/PostContext';  
import PostCard from './PostCard';  

const PostsList = () => {  
    const { posts } = useContext(PostContext);  

    return (  
        <div className="row">  
            {posts.map(post => (  
                <div className="col-md-4 mb-4" key={post.id}>  
                    <PostCard  
                        title={post.title}  
                        content={post.content}  
                        category={post.category}  
                    />  
                </div>  
            ))}  
        </div>  
    );  
};  

export default PostsList;  