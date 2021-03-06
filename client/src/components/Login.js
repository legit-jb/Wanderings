import React, { useContext, useState } from 'react'
import API from '../utils/API'
import { useHistory } from 'react-router-dom'
import { UserContext } from "../contexts/UserContext";

const Login = () => {
  const [userData, setUserData] = useState({});

  const history = useHistory();
  const {setSearch} = useContext(UserContext);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const saveUser = async (event) => {
    event.preventDefault();
    await API.signIn(userData);
    history.push('/home')
    // setSearch(userData.email);
  };

  return (
    <div className='card custom-card signup-card text-center'>
      <form id="signupForm">
        <div className="row m-2">
          <label for="formEmail" className="form-label col-sm-2 col-form-label">
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
          <label
            for="formPassword"
            className="form-label col-sm-2 col-form-label"
          >
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
        <button className="btn custom-btn m-2" onClick={saveUser}>
          Login!
        </button>
      </form>
    </div>
  );
};

export default Login;
