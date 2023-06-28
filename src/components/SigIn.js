/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
// /* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/signin.css';

const SignInComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const response = await axios.post(
        ' https://event-connect.onrender.com/api/v1/users/sign_in',
        {
          user: {
            email,
            password,
          },
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      console.log('Sign in response:', response);

      // Check the response structure
      console.log('Response data:', response.data);
      console.log('Response user data:', response.data.user);

      const { message, user } = response.data;

      // Extract authorization token from response and store it locally
      const token = response.headers.authorization;
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('userId', user.id);
      setMessage('Sign in successful' || '');
      navigate('/events');
    } catch (error) {
      console.error('Sign in failed:', error);
      setMessage('Sign in failed' || '');
    }
  };

  // Function to sign out
  const handleSignOut = async () => {
    const thetoken = sessionStorage.getItem('token');
    try {
      const response = await axios.delete(
        ' https://event-connect.onrender.com/api/v1/users/sign_out',
        {
          headers: {
            Authorization: thetoken,
          },
        },
      );
      console.log('Sign out successful:', response.data);
      sessionStorage.clear();
      setMessage(response.data.message || '');
    } catch (error) {
      console.error('Sign out failed:', error);
      setMessage('Sign out failed' || '');

      if (error.response && error.response.data) {
        setMessage(error.response.data.message || 'Sign out failed');
      }
    }
  };

  return (
    <div className="sign-in-form">
      <h1 className="sign-in-title"> Welcome, please sign in to continue</h1>
      <p>{message}</p>
      <div className="sign-in-inputs">
        <input
          className="email-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="password-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="btn">
        <button className="sign-in-button" type="button" onClick={handleSignIn}>
          Sign In
        </button>
        <Link to="/signup" className="sign-up-link">Sign Up</Link>
      </div>
    </div>
  );
};

export default SignInComponent;
