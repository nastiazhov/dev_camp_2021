import React from 'react';
import './userProfile.css';
import usersProps from '../propTypes/usersProps';

import {
  Grid, Box,
} from '@mui/material';

export function DisplayUser({
  users,
}) {
  return (
    <Box sx={{ width: '80%' }} className="usersContainer">
      <Grid item xs={5} className="userBlock" id={users[0].userId}>
        <div className="container">
          {<img src={avatar} alt="profile pic" className="avatar" /> }
          <p>User ID {id}</p>
          <p>{users[0].fullName}</p>
          <p>{users[0].age}</p>
          <p>{users[0].phone}</p>
          <p>{users[0].location}</p>
        </div>
        <div className="infoRowTitle">Avatar:</div>
          <form
            encType="multipart/form-data"
            action={`http://localhost:3001/users/${users[0].userId}/avatar`}
            method="POST"
          >
            <input type="file" name="avatar" />
            <button type="submit">Submit</button>
          </form>
      </Grid>
    </Box>
  );
}

DisplayUser.propTypes = usersProps;

