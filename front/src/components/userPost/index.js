import './userPost.css';

export function UserPost({
  postPicture,
  text,
  views,
  likes,
}) {
  return (
    <div className="container">
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
    </div>
  );
}