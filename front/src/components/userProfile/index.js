import './userProfile.css';

export function UserProfile({
  name,
  age,
  location,
  avatar
}) {
  return (
    <div className="container">
        <img src={avatar} alt="profile pic" className="avatar" />
        <p>{name}</p>
        <p>{age}</p>
        <p>{location}</p>
      </div>
  );
}