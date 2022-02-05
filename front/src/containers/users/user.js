import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getUser } from './api/crud';
import { DisplayUser } from '../../components/users/displayUser';

const User = () => {
  const params = useParams();
  const { id } = params;

  const { isFetching, data } = useQuery(`users/${id}`, () => getUser(id));
  const user = data?.data || [];
  if (Number.isInteger(Number(id))) {
        return (
      <>
        {isFetching && <div>Loading...</div>}
        <DisplayUser users={user} />
      </>
    );
  }
  return <div>Error 404</div>;
};

export default User;