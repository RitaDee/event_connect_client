import React, { useState } from 'react';
import axios from 'axios';
import '../styles/signup.css';
import { Link, useNavigate } from 'react-router-dom';

const SignUpComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const response = await axios.post(' https://event-connect.onrender.com/api/v1/users', {
        user: {
          name,
          email,
          password,
        },
      });
      // Update message state with the success message from response
      setMessage('Sign up successful');
      navigate('/events');
      return response;
    } catch (error) {
      // Update message state with the error message from response
      setMessage('Sign up failed');
      return error;
    }
  };

  return (
    <div className="sign-up-form">
      <h1 className="sign-up-title"> Welcome, please sign up or sign in to continue</h1>
      <div className="sign-up-inputs">
        <p>{message}</p>
        <input className="name-input" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="email-input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="password-input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>

      <div className="session-buttons">
        <button className="sign-up-button" type="button" onClick={handleSignUp}>Sign Up</button>
        <Link to="/signin" className="sign-in-btn">Sign In</Link>
      </div>
    </div>
  );
};

export default SignUpComponent;
