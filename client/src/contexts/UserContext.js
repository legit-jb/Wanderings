import React, { createContext } from "react";
import {fakeUser as user} from "../components/FakeDBUser";

export const UserContext = createContext({
  user,
  search: "",
  setSearch()
});

setSearch =(email) => {
  this.setState({ search: email })
}

class UserContextProvider extends React.Component {
  state = {
    user,
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
