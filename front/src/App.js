import React, { useState } from 'react';
import './App.css';
import { UserPost } from './components/userPost';
import { AddArticle } from './components/addArticle';
import { UserProfile } from './components/userProfile';
import user from './userData/userPost.json';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route 
            path="/" 
            element={<p>Main page</p>} 
          />
          
          <Route
            path="/articles/:id"
            element={(
              <UserPost
              postPicture={user.postPicture}
              text={user.text}
              postInfo={user.postInfo}
              dateCreated={user.dateCreated}
              />
            )}
          />
          
          <Route 
            path="/articles/add_article" 
            element={<AddArticle />} 
          />
          
          <Route
            path="/profile"
            element={(
              <UserProfile
                name={user.name}
                age={user.age}
                location={user.location}
                avatar={user.avatar}
              />
            )}
          />
          {/* <Route path="/date/:date" element={<DateComp />} /> */}

          <Route 
            path="*" 
            element={<div>Page not found</div>} 
          />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;