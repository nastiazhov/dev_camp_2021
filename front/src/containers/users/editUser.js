import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getUser } from './api/crud';
import { editUser } from '../../components/users/editUser';

const EditUser = () => {
  const params = useParams();
  const { id } = params;

  if (Number.isInteger(Number(id))) {
    const {
      status, error, data,
    } = useQuery(`users/${id}`, () => getUser(id));
    const user = data?.data || [];

    return (
      <>
        {status === 'loading' ? (
          <div>Loading...</div>
        ) : status === 'error' ? (
          error.message
        ) : (
          <editUser users={user} />
        )}
      </>
    );
  }
  return <div>Error 404</div>;
};

export default EditUser;