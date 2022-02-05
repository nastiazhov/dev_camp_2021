import React from 'react';
import './userPost.css';
import postsProps from '../propTypes/userPostProps';

import { 
  Box, 
  Container 
} from '@mui/material';

export function DisplayPosts({
  posts,
}) {
  return (
    <Container maxWidth="sm">
      {posts?.map(({
        id, 
        postPicture,
        text,
        views,
        likes,
        dateCreated,
      }) => (
        <Box sx={{ width: '40%' }} className="postContainer">
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
        </Box>
      ))}
     </Container>
  );
}

DisplayPosts.propTypes = postsProps;