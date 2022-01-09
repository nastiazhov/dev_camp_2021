import './App.css';

import { UserPostContainer } from './containers/userPost';

import user from './userData/userPost.json';

export const App = () => {
  return (
    <>
      <UserPostContainer
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
