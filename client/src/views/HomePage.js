import React from 'react'
import Map from "../components/Map";
import TheModal from "../components/Modal";
import UserContextProvider from '../contexts/UserContext';



const HomePage =() => {
  
  return (
    <div>
        <TheModal />
        <UserContextProvider>
        <Map />
        </UserContextProvider>
    </div>
  )
}

export default HomePage;