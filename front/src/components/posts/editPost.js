import React from 'react';
import { useFormik } from 'formik';
import { useMutation } from 'react-query';
import * as Yup from 'yup';
import { editPost } from '../../containers/posts/api/crud';
import postsProps from '../../propTypes/userPostProps';

import {
    Button, 
    TextareaAutosize, 
    TextField,
  } from '@mui/material';

export function EditPost({
  posts,
}) {
  const schema = Yup.object().shape({
    postPicture: Yup.string(),
    text: Yup.string().required(),
  });

  const mutateHook = useMutation(
    (data) => editPost(posts[0].PostId, data),
  );

  const onFormSubmit = (formData) => {
    mutateHook.mutate(formData);
  };

  const formik = useFormik({
    initialValues: {
      postPicture: posts[0].postPicture,
      text: posts[0].text,
    },
    validationSchema: schema,
    onSubmit: (data) => onFormSubmit(data),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <p>Edit post {posts[0].PostId}</p>
      <p>Enter the text: </p>
      <TextareaAutosize
        name="text"
        aria-label="minimum height"
        minRows={4}
        placeholder="Post text..."
        style={{
          width: 200,
          marginBottom: '10px',
        }}
        onChange={formik.handleChange}
        value={formik.values.text}
      />
      <p>Path to the picture: </p>
      <TextField
        id="outlined-basic"
        name="postPicture"
        label="Post picture"
        variant="outlined"
        onChange={formik.handleChange}
        value={formik.values.postPicture}
      />
      <br />
      <Button variant="outlined" type="submit">Edit post</Button>
    </form>
  );
}

EditPost.propTypes = postsProps;