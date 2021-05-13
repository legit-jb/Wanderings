import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';

import Upload from "./components/Upload";
import Navbar from "./components/Navbar";
import LandingPage from "./views/landingpage";
import ProtectedRoute from "./auth/protected-route";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Upload />
      <LandingPage />
    </div>
  );
};

export default App;
