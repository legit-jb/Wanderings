import React, { useState } from "react";
import API from '../utils/API';
import Login from "../components/Login";
import Signup from "../components/Signup";

const LoginPage = () => {
  const [status, setStatus] = useState(true);

  if (status) {
    return <Login />;
  }

  return (
    <div>
      <Signup />
    </div>
  );
};

export default LoginPage;