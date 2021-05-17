import React, { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

const LoginPage = () => {
  const [status, setStatus] = useState(true);

  if (status) {
    return (
      <div>
        <Login />
        <button className="btn custom-btn m-2" onClick={() => setStatus(false)}>
          Sign up instead!
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <Signup />
        <button className="btn custom-btn m-2" onClick={() => setStatus(true)}>
          Login instead!
        </button>
      </div>
    );
  }
};

export default LoginPage;
