import React from 'react';
import './userPost.css';
import postsProps from '../propTypes/userPostProps';

export function DisplayPosts({
  posts,
}) {
  return (
    <div className="postsContainer">
      {posts?.map(({
        id, 
        postPicture,
        text,
        views,
        likes,
        dateCreated,
      }) => (
        <div className="container">
            <p>{`ID is ${id}`}</p>
            <img src={postPicture} alt="post pic" className="postPicture" />
            <p>{text}</p>
            <ul>
            <li>
                <span>Views </span>
                <span>{views}</span>
            </li>
            <li>
                <span>Likes </span>
                <span>{likes}</span>
            </li>
            </ul>
            <p>{dateCreated}</p>
      </div>
      ))}
    </div>
  );
}

DisplayPosts.propTypes = postsProps;