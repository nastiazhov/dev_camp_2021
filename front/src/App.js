import React, { useState } from 'react';
import './App.css';
import UserPost from './containers/userPost';
import { AddArticle } from './components/addArticle';
import UserProfile from './components/userProfile';
import { DateRoute } from './containers/dateRoute'
import user from './userData/userPost.json';
import ErrorBoundary from './components/ErrorBoundary';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

export const App = () => {
  return (
    <div className="App">
      <ErrorBoundary>
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
                  fullName={user.fullName}
                  age={user.age}
                  location={user.location}
                  user={{
                    name: JSON.stringify(user.fullName),
                    avatar: {
                      file: {
                        id: 1,
                        name: '123.jpg',
                        path: '/files/1.jpg',
                      },
                    },
                    files: [
                      {
                        id: 1,
                        name: '123.jpg',
                        path: '/files/1.jpg',
                      },
                      {
                        id: 2,
                        name: '456.jpg',
                        path: '/files/2.jpg',
                      }],
                    addrr: {
                      main: {
                        line1: 'test',
                        line2: 'test',
                        city: 'test',
                        zip: 1234,
                      },
                      alt: {
                        line1: 'test',
                        line2: 'test',
                        city: 'test',
                        zip: 1234,
                      },
                    },
                    friends: [
                      {
                        name: 'test',
                        age: '23',
                        avatar: {
                          file: {
                            id: 1,
                            name: '123.jpg',
                            path: '/files/1.jpg',
                          },
                        },
                        files: [
                          {
                            id: 1,
                            name: '123.jpg',
                            path: '/files/1.jpg',
                          },
                          {
                            id: 1,
                            name: '123.jpg',
                            path: '/files/1.jpg',
                          }],
                        addrr: {
                          main: {
                            line1: 'test',
                            line2: 'test',
                            city: 'test',
                            zip: 1234,
                          },
                          alt: {
                            line1: 'test',
                            line2: 'test',
                            city: 'test',
                            zip: 1234,
                          },
                        },
                      },
                    ],
                  }}
                />
              )}
            />
            
            <Route path="/date/:date" element={<DateRoute />} />

            <Route 
              path="*" 
              element={<div>Page not found</div>} 
            />
          
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
};

export default App;