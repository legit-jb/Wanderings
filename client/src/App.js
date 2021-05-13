import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';

import Upload from "./components/Upload";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./auth/protected-route";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Upload />
    </div>
  );
};

export default App;
