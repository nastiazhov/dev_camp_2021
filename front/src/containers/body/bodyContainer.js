import React from 'react';
import UserPost from '../userPost'
import { AddArticle } from '../../components/posts/addPost';
import UserProfile from '../../components/userProfile';

export default function Body({ page, name, age, location, avatar, postPicture, text, postInfo }) {
    switch (page) {
      case 'articles': {
        const views = `${postInfo.views}`
        const likes = `${postInfo.likes}`

        return (
          <UserPost
            name={name}
            age={age}
            location={location}
            avatar={avatar}
            postPicture={postPicture}
            text={text}
            views={views}
            likes={likes}
          />
        );
      }
      case 'addArticle': {
        return <AddArticle />;
      }
      case 'profile': {
        return (
          <UserProfile
            name={name}
            age={age}
            location={location}
            avatar={avatar}
          />
        );
      }
    }
}