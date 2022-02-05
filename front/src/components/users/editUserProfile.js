import React from 'react';
import { formik } from 'formik';
import { mutation } from 'react-query';
import * as Yup from 'yup';
import usersProps from '../../propTypes/usersProps';
import { editUser } from '../../containers/users/api/crud';
import './userProfile.css';

import {
    Button, TextField,
  } from '@mui/material';

export function EditUserProfile({
  users,
}) {
  const schema = Yup.object().shape({
    fullName: Yup.string()
      .matches(/^[A-Za-z ]*$/, 'Enter a valid name')
      .min(8)
      .max(255)
      .required(),

    age: Yup.number()
      .min(13)
      .max(100)
      .required(),

    location: Yup.string()
      .matches(/^[A-Za-z ]*$/)
      .required(),

    avatar: Yup.string()
      .max(64)
      .required(),
  });

  const formik = formik({
    initialValues: {
      fullName: users[0].fullName,
      age: users[0].age,
      location: users[0].location,
      avatar: users[0].avatar,
    },
    validationSchema: schema,
    onSubmit: (data) => onFormSubmit(data),
  });

  const mutateHook = mutation(
    (data) => editUser(users[0].id, data),
  );

  const onFormSubmit = (formData) => {
    alert('User was edited successfully!');
    mutateHook.mutate(formData);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <p>Edit user {users[0].id}</p>
      <p>Enter your name: </p>
      <TextField
        id="outlined-basic"
        name="fullName"
        label="Full name"
        variant="outlined"
        onChange={formik.handleChange}
        value={formik.values.fullName}
      />
      <p>Your age: </p>
      <TextField
        id="outlined-basic"
        name="age"
        label="Age"
        variant="outlined"
        onChange={formik.handleChange}
        value={formik.values.age}
      />
      <p>Enter location: </p>
      <TextField
        id="outlined-basic"
        name="location"
        label="Location"
        variant="outlined"
        onChange={formik.handleChange}
        value={formik.values.location}
      />
      <p>Path to the avatar: </p>
      <TextField
        id="outlined-basic"
        name="avatar"
        label="Avatar"
        variant="outlined"
        onChange={formik.handleChange}
        value={formik.values.avatar}
      />
      <Button variant="outlined" type="submit">Edit user</Button>
    </form>
  );
}

EditUserProfile.propTypes = usersProps;