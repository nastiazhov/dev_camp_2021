import { useParams } from 'react-router-dom';
import { UserPostByNumber } from '../../components/userPost/userPostByNumber';
import { UserPostByUpperLetter } from '../../components/userPost/userPostByUpperLetter';
import { UserPostByFormat } from '../../components/userPost/userPostByFormat';

const UserPost = ({
  postPicture,
  text,
  views,
  likes,
  dateCreated,
}) => {
  const params = useParams();
  // throw Error; //checking errors 
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
      <UserPostByNumber
        id={params.id}
        postPicture={postPicture}
        text={text}
        views={views}
        likes={likes}
        dateCreated={dateCreated}
    />
    );
  }

  if (isUpperLetters(params.id)) {
    return (
      <UserPostByUpperLetter
        id={params.id}
        postPicture={postPicture}
        text={text}
        views={views}
        likes={likes}
        dateCreated={dateCreated}
    />
    );
  }

  if (isCorrectFormat(params.id)) {
    return (
      <UserPostByFormat
        id={params.id}
        postPicture={postPicture}
        text={text}
        views={views}
        likes={likes}
        dateCreated={dateCreated}
    />
    );
  }

  return (<div>Page not found</div>);
};

export default UserPost;