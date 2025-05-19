import React from 'react';  

const PostCard = ({ title, content, category }) => {  
    return (  
        <div className="card">  
            <div className="card-body">  
                <h5 className="card-title">{title}</h5>  
                <p className="card-text">{content}</p>  
                <span className="badge badge-info">{category}</span>  
            </div>  
        </div>  
    );  
};  

export default PostCard;  