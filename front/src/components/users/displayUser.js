import React from 'react';
import './userProfile.css';
import usersProps from '../propTypes/usersProps';

export function DisplayUser({
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
        <div className="container">
        {/* <img src={avatar} alt="profile pic" className="avatar" /> */}
        <p>User ID {id}</p>
        <p>{fullName}</p>
        <p>{age}</p>
        <p>{location}</p>
      </div>
      ))}
    </div>
  );
}

DisplayUser.propTypes = usersProps;