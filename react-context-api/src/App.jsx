import React from 'react';  
import PostsPage from './components/PostsPage';  
import PostProvider from './contexts/PostContext';  

const App = () => {  
    return (  
        <PostProvider>  
            <div>  
                <PostsPage />  
            </div>  
        </PostProvider>  
    );  
};  

export default App;  