import React from 'react';  

// Componente PostCard   
const PostCard = ({ title, content, category }) => {  
    return (  
        <div className="post-card" style={styles.card}>  
            <h2>{title}</h2>  
            <p>{content}</p>  
            <span>{category}</span>  
        </div>  
    );  
};  

export default PostCard;  