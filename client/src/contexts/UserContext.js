import React, {useState, context, createContext, useEffect} from 'react';
import API from "../utils/API";

export const UserContext = createContext({
    user: {},
    search: "",
  });

const UserContextProvider = ({children}) =>{
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState(null);

    // let setSearch = (email) => {
    //     setSearch({ search: email });
    //   };
    function setSearch(email) {
        setEmail(email);
    }

    useEffect(() =>{
        API.getEmail(email).then(res => setUser(res.data))
    },[email]);
   
   const { Provider } = UserContext
   return(
       <UserContext.Provider value={user,setSearch}>
           {children}
       </UserContext.Provider>
   )
}

export default UserContextProvider