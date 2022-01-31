import React from 'react';
import { useQuery } from 'react-query';
import { getUsers } from './api/crud';

import { DisplayUsers } from '../../components/users/displayUsers';

const Users = () => {
  const { isFetching, data } = useQuery('users', () => getUsers());
  const users = data?.data || [];

  return (
    <>
      {isFetching && <div>Loading...</div>}
      <DisplayUsers users={users} />
    </>
  );
};

export default Users;