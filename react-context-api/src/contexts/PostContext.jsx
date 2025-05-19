import React, { createContext, useState } from 'react';  

export const PostContext = createContext();  

const PostProvider = ({ children }) => {  
    const [posts, setPosts] = useState([  
        { id: 1, title: 'Post 1', content: 'Questo è il contenuto del post 1', category: 'Categoria 1' },  
        { id: 2, title: 'Post 2', content: 'Questo è il contenuto del post 2', category: 'Categoria 2' },  
    ]);  

    return (  
        <PostContext.Provider value={{ posts, setPosts }}>  
            {children}  
        </PostContext.Provider>  
    );  
};  

export default PostProvider;  