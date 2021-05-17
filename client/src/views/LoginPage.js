import React, { useState } from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'
import About from '../components/About'
import UserContextProvider, { UserContext } from '../contexts/UserContext';


const LoginPage = () => {
  const [status, setStatus] = useState(true)

  if (status) {
    return (
      <div>
        <div className='container d-flex justify-content-center'>
          <About />
        </div>
      <div className='container d-flex justify-content-center'>
        <UserContextProvider>
        <Login />
        </UserContextProvider>
        </div>
        <div className='container-fluid d-flex justify-content-center'>
          <p>
        <button className='btn custom-btn m-2' onClick={() => setStatus(false)}>
          Sign up instead!
        </button>
        </p>
      </div>
      </div>
    )
  } else {
    return (
      <div>
        <div className='container d-flex justify-content-center'>
          <About />
        </div>
        <div className='container-fluid d-flex justify-content-center'>
        <UserContextProvider>
          <Signup />
          </UserContextProvider>
        </div>
        <div className='container-fluid d-flex justify-content-center'>
          <p>
            <button
              className='btn custom-btn m-2'
              onClick={() => setStatus(true)}
            >
              Login instead!
            </button>
          </p>
        </div>
      </div>
    )
  }
}

export default LoginPage
