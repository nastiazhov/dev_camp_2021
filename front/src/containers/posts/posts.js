import React from 'react';
import { useQuery } from 'react-query';
import { getPosts } from './api/crud';

import { DisplayPosts } from '../../components/posts/displayPosts';

const Posts = () => {
  const { status, error, data } = useQuery('posts', () => getPosts());
  const posts = data?.data;

  return (
    <>
      {status === 'loading' ? (
        <div>Loading...</div>
      ) : status === 'error' ? (
        error.message
      ) : (
        <ShowAllPosts posts={posts} />
      )}
    </>
  );
};

export default Posts;