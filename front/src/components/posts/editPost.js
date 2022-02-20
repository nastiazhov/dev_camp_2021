import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useMutation } from 'react-query';
import * as Yup from 'yup';
import { editPost } from '../../containers/posts/api/crud';
import postsProps from '../../propTypes/userPostProps';
import Cropper from 'react-cropper';
import { serialize } from 'object-to-formdata';
import dataURLtoBlob from 'blueimp-canvas-to-blob';
import PropTypes from 'prop-types';

import {
    Button,
    TextField,
    Autocomplete,
    Box,
  } from '@mui/material';

export function EditPost({
  posts, options, defaultLabel,
}) {
  const [image, setImage] = useState();
  const [croppedImage, setCroppedImage] = useState();
  const [cropper, setCropper] = useState();
  const MAX_IMAGE_SIZE = 10000000;
  const FILE_TYPE_IMAGE = 'image.*';

  const schema = Yup.object().shape({
    postPicture: Yup.string(),
    text: Yup.string().required(),
  });

  const mutateHook = useMutation(
    (data) => editPost(posts[0].PostId, data),
  );

  const onFormSubmit = (data) => {
    const formData = serialize({
      text: data.text,
      availability: data.availability,
      creatorId: data.creatorId,
    }, { indices: true });

    if (croppedImage) formData.append('image', dataURLtoBlob(croppedImage));
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
    <form onSubmit={formik.handleSubmit}>
      <p>Edit post {posts[0].PostId}</p>
      <p>Post availability: </p>
      <Autocomplete
        sx={{
          width: '300px',
          margin: '0 auto',
        }}
        defaultValue={{
          value: formik.values.availability,
          label: defaultLabel,
        }}
        options={options}
        getOptionLabel={(option) => option.label}
        onChange={(_, availability) => {
          if (availability !== null) formik.setFieldValue('availability', `${availability.value}`);
          else formik.setFieldValue('availability', '');
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Availability for"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        )}
      />
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
      {post[0].image && (
        <img src={`http://localhost:2001/posts/${post[0].postId}/image`} alt="" width={300} />
      )}
      <Box width="600px" margin="0 auto">
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
      <br />
      <Button variant="outlined" type="submit">Edit post</Button>
    </form>
  );
}

EditPost.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  defaultLabel: PropTypes.string.isRequired,
};