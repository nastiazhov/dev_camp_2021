import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { EditPost } from '../../components/posts/editPost';
import { getPost } from './api/crud';

const EditPost = () => {
  const params = useParams();
  const { id } = params;
  const options = [
    { value: 'for all', label: 'All' },
    { value: 'for friends', label: 'Friends' },
    { value: 'for me', label: 'Me' },
  ];

  const getDefaultLabel = (optionsArr) => {
    const optionsValueArr = optionsArr.map((e) => e.value);
    return options[optionsValueArr.indexOf(post[0].availability)].label;
  };

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
          <EditPost post={post} options={options} defaultLabel={getDefaultLabel(options)}/>
        )}
      </>
    );
  }

  return <div>Error 404</div>;
};

export default EditPost;