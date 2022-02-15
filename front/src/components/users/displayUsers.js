import React from 'react';
import './userProfile.css';
import { Link } from 'react-router-dom';
import usersProps from '../propTypes/usersProps';

export function DisplayUsers({
  users,
}) {
  return (
    <Box sx={{ width: '80%' }} className="usersContainer">
      <Grid container justifyContent="space-around" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {users?.map(({
         id, 
         fullName,
         age,
         location,
         avatar,
      }) => (
        <Grid item xs={5} className="userBlock">
          <Link to={`/users/${id}`} id={`userBlock-${userId}`} key={`userBlock-${userId}`}>
            <div className="container">
              {<img src={avatar} alt="profile pic" className="avatar" />}
              <p>User ID {id}</p>
              <p>{fullName}</p>
              <p>{age}</p>
              <p>{location}</p>
          </div>
          </Link>
        </Grid>
      ))}
      </Grid>
    </Box>
  );
}

DisplayUsers.propTypes = usersProps;