import React, { createContext, useEffect } from "react";
import {FakeDBUser as user} from "../components/FakeDBUser";
import API from "../utils/API";

export const UserContext = createContext({
  user,
  search:"",
});

class UserContextProvider extends React.Component {
  state = {
    user,
    search: "",
  };

  // setUser = (email) => {
  //   const userTemp = API.getEmail(email);
  //   this.setState ({user: userTemp});
  // }

  setSearch = (email) => {
    this.setState({ search: email })
    // const userTemp = API.getEmail(email);
    // this.setState ({user: userTemp});
    // setUser (email);
  };

  render() {
    return (
      <UserContext.Provider value={{ ...this.state, setSearch: this.setSearch}}>
          {this.props.children}
      </UserContext.Provider>
    );
    // end return
  }
  // end render
}
// end class

export default UserContextProvider;
