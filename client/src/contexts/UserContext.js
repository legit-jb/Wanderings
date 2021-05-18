import React, { createContext, useEffect, setState, Component, prevState } from "react";
import API from "../utils/API";

export const UserContext = createContext({
  user: {},
  search: "",
});

class UserContextProvider extends React.Component {
  state = {
    user: {},
    search: "",
  };


  setUser = (userTemp) => {
    this.setState ({user: userTemp});
  }

  setSearch = (email) => {
    this.setState({ search: email });
  };

  render() {
    return (
      <UserContext.Provider value={{ ...this.state, setSearch: this.setSearch, setUser: this.setUser }}>
        {this.props.children}
      </UserContext.Provider>
    );
    // end return
  }
  // end render
}
// end class

export default UserContextProvider;
