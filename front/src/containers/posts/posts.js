import React from 'react';
import { useQuery } from 'react-query';
import { getPosts } from './api/crud';

import { DisplayPosts } from '../../components/posts/displayPosts';

const Posts = () => {
  const { isFetching, data } = useQuery('posts', () => getPosts());
  const posts = data?.data;

  return (
    <>
      {isFetching && <div>Loading...</div>}
      <DisplayPosts posts={posts} />
    </>
  );
};

export default Posts;