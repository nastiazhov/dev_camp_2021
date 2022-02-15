import './userPost.css';
import userPostProps from '../propTypes/userPostProps';

import {
  Box,
} from '@mui/material';

export function UserPostByUpperLetter({
  id,
  postPicture,
  text,
  views,
  likes,
  dateCreated,
}) {
  return (
    <Box sx={{ width: '55%' }} className="postsContainer">
        <p>{`ID by upper letters is ${id}`}</p>
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
  );
}

UserPostByUpperLetter.propTypes = userPostProps;

UserPostByUpperLetter.defaultProps = {
  postPicture: 'N/A',
};