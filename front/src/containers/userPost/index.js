import { UserPost } from '../../components/userPost'

export function UserPostContainer({ name, age, location, avatar, postPicture, text, postInfo }) {
  const views = `${postInfo.views}`
  const likes = `${postInfo.likes}`

  return (
    <UserPost
      name={name}
      age={age}
      location={location}
      avatar={avatar}
      postPicture={postPicture}
      text={text}
      views={views}
      likes={likes}
    />
  )
}