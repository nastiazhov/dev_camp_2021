import PropTypes from 'prop-types';
import './userProfile.css';

const UserProfile = ({
  name,
  age,
  location,
  avatar
}) => {
  return (
    <div className="container">
        <img src={avatar} alt="profile pic" className="avatar" />
        <p>{name}</p>
        <p>{age}</p>
        <p>{location}</p>
      </div>
  );
};

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
};

UserProfile.defaultProps = {
  avatar: 'N/A',
};

export default UserProfile;