import React, { createContext } from "react";
import {fakeUser as user} from "../components/FakeDBUser";
import TagsDropdown from "../components/TagsDropdown";


// export const UserContext = createContext({
//   currentTag: "default",
//   user,
//   setTag: () => {}
// })

// export const UserContextProvider = (props) => {

//   const setTag = (tag) => {
//     setState({...state, currentTag: currentTag})
//   }

//   const initState = {
//     language: "default",
//     setTag: setTag
//   } 

//   const [state, setState] = useState(initState)

//   return (
//     <UserContext.Provider value={state}>
//       {props.children}
//     </UserContext.Provider>
//   )
// }
export const UserContext = createContext({
  currentTag: "default",
  user,
});

class UserContextProvider extends React.Component {
  state = {
    currentTag: "default",
    user,
  };
  // end state

  setTag = (tag) => {
    this.setState({ 
      currentTag: tag
   })
  }  

  render() {
    return (
      <UserContext.Provider value={{ ...this.state, setTag: this.setTag }}>
          <TagsDropdown />
      </UserContext.Provider>
    );
    // end return
  }
  // end render
}
// end class

export default UserContextProvider;
