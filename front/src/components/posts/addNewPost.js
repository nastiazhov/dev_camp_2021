import React from 'react';
import { formik } from 'formik';
import { mutation } from 'react-query';
import * as Yup from 'yup';
import { addPost } from '../../containers/posts/api/crud';

import {
    Button, 
    TextField, 
    TextareaAutosize,
  } from '@mui/material';

export function AddPost() {
  const schema = Yup.object().shape({
    postPicture: Yup.string(),
    text: Yup.string().required(),
  });

  const mutateHook = mutation(
    (data) => addPost(data),
  );

  const onFormSubmit = (formData) => {
    mutateHook.mutate(formData);
  };

  const formik = useFormik({
    validationSchema: schema,
    onSubmit: (data) => onFormSubmit(data),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
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
      <Button variant="outlined" type="submit">Add post</Button>
    </form>
  );
}