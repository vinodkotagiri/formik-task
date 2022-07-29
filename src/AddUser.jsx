import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
export const url = 'https://62b57f65da3017eabb1bfec8.mockapi.io/students';
const AddUser = () => {
  const navigate = useNavigate();
  const postData = (data) => {
    axios
      .post(url, data)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dob: '',
      location: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required('*Required')
        .min(2, 'Name cannot be less than 2 chars'),
      lastName: Yup.string()
        .required('*Required')
        .min(2, 'Name cannot be less than 2 chars'),
      email: Yup.string().email('Enter a valid email').required('*Required'),
      dob: Yup.string(),
      phone: Yup.string()
        .max(10, 'Mobile number cannot excced 10 numbers')
        .matches(/^\d{10}$/, 'Enter a valid mobile number'),
      location: Yup.string(),
    }),
    onSubmit: () => {
      postData(formik.values);
      navigate('/view-users');
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className='row'>
        <label htmlFor='firstName' className='label'>
          First Name
        </label>
        <input
          className='inputField'
          id='firstName'
          name='firstName'
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.errors.firstName ? (
          <div style={{ color: 'red', fontStyle: 'italic' }}>
            {formik.errors.firstName}
          </div>
        ) : null}
      </div>

      <div className='row'>
        <label htmlFor='lastName' className='label'>
          Last Name
        </label>
        <input
          className='inputField'
          id='lastName'
          name='lastName'
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        ></input>
        {formik.errors.lastName ? (
          <div style={{ color: 'red', fontStyle: 'italic' }}>
            {formik.errors.lastName}
          </div>
        ) : null}
      </div>
      <div className='row'>
        <label htmlFor='firstName' className='label'>
          Email
        </label>
        <input
          className='inputField'
          id='email'
          name='email'
          type='email'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        ></input>
        {formik.errors.email ? (
          <div style={{ color: 'red', fontStyle: 'italic' }}>
            {formik.errors.email}
          </div>
        ) : null}
      </div>
      <div className='row'>
        <label htmlFor='firstName' className='label'>
          Phone
        </label>
        <input
          className='inputField'
          id='phone'
          name='phone'
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        ></input>
        {formik.errors.phone ? (
          <div style={{ color: 'red', fontStyle: 'italic' }}>
            {formik.errors.phone}
          </div>
        ) : null}
      </div>
      <div className='row'>
        <label htmlFor='dob' className='label'>
          DOB
        </label>
        <input
          className='dob'
          id='dob'
          name='dob'
          type='date'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.dob}
        ></input>
        {formik.errors.dob ? (
          <div style={{ color: 'red', fontStyle: 'italic' }}>
            {formik.errors.dob}
          </div>
        ) : null}
      </div>
      <div className='row'>
        <label htmlFor='firstName' className='label'>
          Location
        </label>
        <input
          className='inputField'
          id='location'
          name='location'
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.location}
        ></input>
        {formik.errors.location ? (
          <div style={{ color: 'red', fontStyle: 'italic' }}>
            {formik.errors.location}
          </div>
        ) : null}
      </div>
      <button className='button' type='submit'>
        Submit
      </button>
    </form>
  );
};
export default AddUser;
