import style from './userPost.css';

export function UserPost({
  name,
  age,
  location,
  avatar,
  postPicture,
  text,
  views,
  likes,
}) {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.userInfo}>
          <div className={style.avatar}>
            <img src={avatar} alt="profile pic" className={style.avatar} width="50px" height="50px" />
          </div>
          <div className={style.name}>
            <p>{name}</p>
          </div>
          <div className={style.age}>
            <p>{age}</p>
          </div>
        </div>
        <p className={style.location}>{location}</p>
        

        <div className={style.post}>
          <img src={postPicture} alt="post pic" className={style.postPicture} width="600px" height="400px" />
          <p className={style.text}>{text}</p>

          <ul className={style.postInfo}>
            <li className={style.item}>
              <span className={style.label}>Views </span>
              <span className={style.value}>{views}</span>
            </li>
            <li className={style.item}>
              <span className={style.label}>Likes </span>
              <span className={style.value}>{likes}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}