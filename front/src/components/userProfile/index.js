import userProfileProps from '../propTypes/userProfileProps';
import userProfileDefaultProps from '../propTypes/userProfileDefaultProps';
import './userProfile.css';

const UserProfile = ({
  fullName,
  age,
  location,
  user,
}) => {
  return (
    <div className="container">
        {/* <img src={avatar} alt="profile pic" className="avatar" /> */}
        <p>{fullName}</p>
        <p>{age}</p>
        <p>{location}</p>
        <p>{JSON.stringify(user)}</p>
      </div>
  );
};

UserProfile.propTypes = userProfileProps;
UserProfile.defaultProps = userProfileDefaultProps;

export default UserProfile;