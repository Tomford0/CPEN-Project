import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../login/Login.css';

const Login = () => {
  const [signUpData, setSignUpData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [signInData, setSignInData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate(); // Use useNavigate hook

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    console.log('Sign Up Data:', signUpData);
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
    console.log('Sign In Data:', signInData);
    navigate('/'); // Navigate to Home page
  };

  return (
    <div className="container" id="container">
    <div className="form-container sign-up-container">
      <form onSubmit={handleSignUpSubmit}>
        <h1>Create Account</h1>
        <input 
          type="text" 
          name="name" 
          placeholder="Name" 
          value={signUpData.name} 
          onChange={handleSignUpChange} 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={signUpData.email} 
          onChange={handleSignUpChange} 
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          value={signUpData.password} 
          onChange={handleSignUpChange} 
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
    <div className="form-container sign-in-container">
      <form onSubmit={handleSignInSubmit}>
        <h1>Sign In</h1>
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={signInData.email} 
          onChange={handleSignInChange} 
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          value={signInData.password} 
          onChange={handleSignInChange} 
        />
        <a href="#">Forgot your password?</a>
        <button type="submit">Sign In</button>
      </form>
    </div>
    <div className="overlay-container">
      <div className="overlay">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/64/University_of_Ghana.png"
          className="img"
          alt="University of Ghana"
        />
        <div className="text">
          <h1>Welcome</h1>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Login;
