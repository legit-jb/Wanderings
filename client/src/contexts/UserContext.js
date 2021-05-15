import React, { createContext } from "react";
import {fakeUser as user} from "../components/FakeDBUser";

export const UserContext = createContext();

class UserContextProvider extends React.Component {
  state = {
    currentTag: "default",
    user,
  };
  // end state
  render() {
    return (
      <UserContext.Provider value={{ ...this.state }}>
          {this.props.children}
      </UserContext.Provider>
    );
    // end return
  }
  // end render
}
// end class

export default UserContextProvider;
