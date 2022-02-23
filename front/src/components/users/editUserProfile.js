import React, { useState }  from 'react';
import { formik } from 'formik';
import { mutation } from 'react-query';
import * as Yup from 'yup';
import usersProps from '../../propTypes/usersProps';
import { editUser } from '../../containers/users/api/crud';
import './userProfile.css';
import '../modal.css';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import { serialize } from 'object-to-formdata';
import dataURLtoBlob from 'blueimp-canvas-to-blob';

import {
  Button, TextField, Autocomplete, Box, Modal,
  } from '@mui/material';

export function EditUserProfile({
  users, countries, defaultCode, defaultPhone,
}) {
  const [image, setImage] = useState();
  const [croppedImage, setCroppedImage] = useState();
  const [cropper, setCropper] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const MAX_IMAGE_SIZE = 10000000;
  const FILE_TYPE_IMAGE = 'image.*';

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
      phone: users[0].phone,
      avatar: users[0].avatar,
    },
    validationSchema: schema,
    onSubmit: (data) => onFormSubmit(data),
  });

  const mutateHook = mutation(
    (data) => editUser(users[0].id, data),
  );

  const onFormSubmit = (data) => {
    const formData = serialize({
      firstName: data.firstName,
      secondName: data.secondName,
      middleName: data.middleName,
      email: data.email,
      phone: data.phone,
      country: data.country,
    }, { indices: true });

    if (croppedImage) formData.append('avatar', dataURLtoBlob(croppedImage));
    alert('User was edited successfully!');
    mutateHook.mutate(formData);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    if (file.type.match(FILE_TYPE_IMAGE) && file.size < MAX_IMAGE_SIZE) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      console.error('Wrong file format or size!');
    }
  };

  const cropImage = () => {
    if (typeof cropper !== 'undefined') {
      setCroppedImage(cropper.getCroppedCanvas().toDataURL());
      setImage(null);
    }
  };

  const deleteImage = () => {
    setCroppedImage(null);
    setImage(null);
  };

  return (
    <>
    <Button variant="contained" onClick={openModal}>Open modal</Button>
      <Modal
        open={isModalOpen}
        onClose={closeModal}
        className="modalStyle"
      >
      <Box className="boxStyle">
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
          {users[0].avatar && (
            <img src={`http://localhost:2001/users/${users[0].userId}/avatar`} alt="" width={300} />
          )}
          <Box width="400px">
            {!image && (
              <Button variant="contained" component="label">
                Edit image
                <input type="file" hidden onChange={handleChange} />
              </Button>
            )}

            {image && <Button variant="contained" onClick={deleteImage}>Delete image</Button>}
            {image && (
              <Cropper
                src={image}
                onInitialized={(instance) => setCropper(instance)}
                rotatable={false}
                viewMode={1}
                minCropBoxWidth={100}
                minCropBoxHeight={100}
                autoCropArea={1}
              />
            )}
            {image && (
              <Button variant="contained" onClick={cropImage}>Crop</Button>
            )}
          </Box>

          <p>Choose your country: </p>
          <Autocomplete
            id="country-select-demo"
            sx={{
              width: '300px',
              margin: '0 auto',
            }}
            defaultValue={{
              code: defaultCode,
              label: formik.values.country,
              phone: defaultPhone,
            }}
            options={countries}
            autoHighlight
            getOptionLabel={(option) => option.label}
            onChange={(_, country) => {
              if (country !== null) formik.setFieldValue('country', `${country.label}`);
              else formik.setFieldValue('country', '');
            }}

            renderOption={(props, option) => (
              <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                <img
                  loading="lazy"
                  width="20"
                  src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                  srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                  alt=""
                />
                {option.label}
                {' '}
                (
                {option.code}
                ) +
                {option.phone}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                onChange={formik.handleChange}
                label="Choose a country"
              />
            )}
            />
          <Button variant="outlined" type="submit">Edit user</Button>
        </form>
      </Box>
    </Modal>
    </>
  );
}

EditUserProfile.propTypes = {
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }),
  ).isRequired,
  defaultCode: PropTypes.string.isRequired,
  defaultPhone: PropTypes.string.isRequired,
};