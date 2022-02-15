import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { EditPost } from '../../components/posts/editPost';
import { getPost } from './api/crud';

const EditPost = () => {
  const params = useParams();
  const { id } = params;

  if (Number.isInteger(Number(id))) {
    const {
      status, error, data,
    } = useQuery(`posts/${id}`, () => getPost(id));
    const post = data?.data || [];

    return (
      <>
        {status === 'loading' ? (
          <div>Loading...</div>
        ) : status === 'error' ? (
          error.message
        ) : (
          <EditPost post={post} />
        )}
      </>
    );
  }

  return <div>Error 404</div>;
};

export default EditPost;