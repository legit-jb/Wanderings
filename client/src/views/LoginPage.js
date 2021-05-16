import React, { useState } from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';

const LoginPage =() => {
  const [status, setstatus] = useState(true);

  return (
      <div>
       { status === true ? (<Login />) : (<Signup />) }
      </div>
    )
  }
  
  export default LoginPage;

