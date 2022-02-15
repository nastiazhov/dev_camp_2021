import userProfileProps from '../propTypes/userProfileProps';
import userProfileDefaultProps from '../propTypes/userProfileDefaultProps';
import './userProfile.css';

import {
  Box,
} from '@mui/material';

const UserProfile = ({
  fullName,
  age,
  location,
  avatar,
  user,
}) => {
  return (
    <Box sx={{ width: '40%' }} className="profileContainer">
        {<img src={avatar} alt="profile pic" className="avatar" />}
        <p>{fullName}</p>
        <p>{age}</p>
        <p>{location}</p>
        <p>{JSON.stringify(user)}</p>
    </Box>
  );
};

UserProfile.propTypes = userProfileProps;
UserProfile.defaultProps = userProfileDefaultProps;

export default UserProfile;