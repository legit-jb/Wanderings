import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./views/HomePage";
import LoginPage from "./views/LoginPage";
import Upload from "./components/Upload";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/upload" component={Upload} />
      </Switch>
    </div>
  );
};

export default App;
