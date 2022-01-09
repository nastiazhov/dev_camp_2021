import React from 'react';
import { UserPost } from '../../components/userPost'

export function UserPostContainer({ name, age, location, avatar, postPicture, text, postInfo }) {
  const views = `${postInfo.views}`
  const likes = `${postInfo.likes}`

  return (
    <UserPost
      postPicture={postPicture}
      text={text}
      views={views}
      likes={likes}
    />
  )
}