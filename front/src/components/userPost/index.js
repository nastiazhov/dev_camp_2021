import './userPost.css';
import { useParams } from 'react-router-dom';

export function UserPost({
  postPicture,
  text,
  views,
  likes,
  dateCreated,
}) {
  const params = useParams();

  function isUpperLetters(string) {
    return /^[A-Z]+$/.test(string);
  }

  function isCorrectFormat(string) {
    const arr = string.split('.');
    const [fileName, ext] = arr;
    const validFormats = ['doc', 'pdf', 'jpeg'];

    if (/^[A-Za-z0-9]+$/.test(fileName) && validFormats.includes(ext) && arr.length === 2) 
      return true;
    return false;
  }

  if (Number.isInteger(Number(params.id))) {
    return (
      <div className="container">
        <p>{`ID is ${params.id}`}</p>
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

  if (isUpperLetters(params.id)) {
    return (
      <div className="container">
        <p>{`ID with upper letters ${params.id}`}</p>
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

  if (isCorrectFormat(params.id)) {
    return (
      <div className="container">
        <p>{`ID with format ${params.id}`}</p>
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

  return (<div>Page not found</div>);
}