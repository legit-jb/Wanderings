import React, { createContext } from "react";
import {fakeUser as user} from "../components/FakeDBUser";

export const UserContext = createContext({
  user,
});

class UserContextProvider extends React.Component {
  state = {
    user,
  };

  render() {
    return (
      <UserContext.Provider value={{ ...this.state}}>
          {this.props.children}
      </UserContext.Provider>
    );
    // end return
  }
  // end render
}
// end class

export default UserContextProvider;
