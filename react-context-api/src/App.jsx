// src/App.jsx  
import React from 'react';  
import PostProvider from './contexts/PostContext';  
import PostsPage from './components/PostsPage';  

const App = () => {  
    return (  
        <PostProvider>  
            <div className="container mt-4">  
                <h1>Gestione dei Post</h1>  
                <PostsPage />  
            </div>  
        </PostProvider>  
    );  
};  

export default App;  