import React, { useState } from 'react'
import API from '../utils/API'

const Signup = () => {
  const [userData, setUserData] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value
    })
  };

  const saveUser = async (event) => {
    event.preventDefault();

    await API.signUp(userData);
    const userLogin = {
      email: userData.email,
      password: userData.password
    }
    setSearch(userData.email);
    API.signIn(userLogin);    
  }

  return (
    <div className='card custom-card signup-card text-center'>
      <form id="signupForm">
        <div className="row m-2">
          <label for="formName" className="form-label col-sm-2 col-form-label">
            Username
          </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="text"
              id="formName"
              name="name"
              placeholder="Username"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row m-2">
          <label
            for="formEmail"
            className="form-label col-sm-2 col-form-label"
          >
            Email
          </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="text"
              id="formEmail"
              name="email"
              placeholder="email"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row m-2">
          <label for="formPassword" className="form-label col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="password"
              id="formPassword"
              name="password"
              placeholder="Password"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row m-2">
          <label for="formConfirmPassword" className="form-label col-sm-2 col-form-label">
            Confirm Password
          </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="password"
              id="password_confirmation"
              name="password_confirmation"
              placeholder="confirm password"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button className="btn custom-btn mb-2" onClick={saveUser}>
          Sign Up!
        </button>
      </form>
    </div>
  );
};

export default Signup;
