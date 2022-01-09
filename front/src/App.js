import React, { useState } from 'react';
import './App.css';
import Header from './containers/header/headerContainer';
import Body from './containers/body/bodyContainer';
import user from './userData/userPost.json';

export const App = () => {
  const [page, currentPage] = useState('profile');
  return (
    <>
      <Header currentPage={currentPage} />
      <Body 
        page={page} 
        name={user.name}
        age={user.age}
        location={user.location}
        avatar={user.avatar}
        postPicture={user.postPicture}
        text={user.text}
        postInfo={user.postInfo}
      />
    </>
  );
};

export default App;