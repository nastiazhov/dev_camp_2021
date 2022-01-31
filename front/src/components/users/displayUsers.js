import React from 'react';
import './userProfile.css';
import { Link } from 'react-router-dom';
import usersProps from '../propTypes/usersProps';

export function DisplayUsers({
  users,
}) {
  return (
    <div className="usersContainer">
      {users?.map(({
         id, 
         fullName,
         age,
         location,
      }) => (
        <Link to={`/users/${id}`}>
          <div className="container">
            {/* <img src={avatar} alt="profile pic" className="avatar" /> */}
            <p>User ID {id}</p>
            <p>{fullName}</p>
            <p>{age}</p>
            <p>{location}</p>
        </div>
        </Link>
      ))}
    </div>
  );
}

DisplayUsers.propTypes = usersProps;