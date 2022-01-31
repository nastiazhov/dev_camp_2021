import './userPost.css';
import userPostProps from '../propTypes/userPostProps';

export function UserPostByNumber({
  id,
  postPicture,
  text,
  views,
  likes,
  dateCreated,
}) {
  return (
    <div className="container">
        <p>{`ID by number is ${id}`}</p>
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

UserPostByNumber.propTypes = userPostProps;

UserPostByNumber.defaultProps = {
  postPicture: 'N/A',
};