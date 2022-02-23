import React, { useState } from 'react';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import UserPost from './containers/userPost';
import AddPost from './containers/posts/addPost';
import EditPost from './containers/posts/editPost';
import EditUser from './containers/users/editUser';
import UserProfile from './components/userProfile';
import { DateRoute } from './containers/dateRoute'
import Posts from './containers/posts/posts';
import Users from './containers/users/users';
import User from './containers/users/user';
import user from './userData/userPost.json';
import ErrorBoundary from './components/ErrorBoundary';
import authContext from './authContext';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

const queryClient = new QueryClient();

export const App = () => {

  const [userData, setUserData] = useState({
    authenticated: true,
    user: {
      userId: 1,
      firstName: 'default name',
      email: 'default@default.com',
    },
    setUserData: () => {},
  });

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
      <authContext.Provider value={userData}>
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
                path="/posts/add_post" 
                element={<AddPost />} 
              
              />
              <Route 
                path="/posts/:id/edit_post" 
                element={<EditPost />} 
              />

              <Route 
                path="/posts" 
                element={<Posts />} 
              />
              <Route 
                path="/users" 
                element={<Users />} 
              />
              <Route 
                path="/users/:id" 
                element={<User />} 
              />

              <Route 
                path="/users/:id/edit_user" 
                element={<EditUser />} 
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
        </authContext.Provider>
      </QueryClientProvider>
    </div>
  );
};

export default App;