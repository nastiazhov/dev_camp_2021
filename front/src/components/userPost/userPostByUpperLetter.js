import './userPost.css';
import userPostProps from '../propTypes/userPostProps';

export function UserPostByUpperLetter({
  id,
  postPicture,
  text,
  views,
  likes,
  dateCreated,
}) {
  return (
    <div className="container">
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
      </div>
  );
}

UserPostByUpperLetter.propTypes = userPostProps;

UserPostByUpperLetter.defaultProps = {
  postPicture: 'N/A',
};