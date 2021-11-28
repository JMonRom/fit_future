import React, {useState} from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import {createUser} from '../utils/API';
import Auth from '../utils/auth';

const Signup = () => {
  const [userFormData, setUserFormData] = useState({
    username: '', email: '', password: ''
  });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopProagation();
    }

    try {
      const response = await createUser(userFormData);

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const {token, user} = await response.json();
      console.log(user);
      Auth.login(token);
    } catch (err) {
      console.log(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with this signup !
        </Alert>
   
      <Form.Group>
        <Form.Label htmlFor = 'username'> Username
        </Form.Label>
        <Form.Control 
          type='text'
          placeholder='Your username'
          name='username'
          onChange={handleInputChange}
          value={userFormData.username}
          required
        />
        <Form.Control.Feedback type='invalid'> Username is required! </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Your email address'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={!(userFormData.username && userFormData.email && userFormData.password)}
          type='submit'
          variant='success'
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Signup;