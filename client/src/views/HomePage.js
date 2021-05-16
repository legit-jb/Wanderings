import React from 'react'
import Map from "../components/Map";
import Navbar from "../components/Navbar";
import Upload from "../components/Upload";
import TheModal from "../components/Modal";
import {fakeUser as user} from "../components/FakeDBUser";
import UserContextProvider from '../contexts/UserContext';



const HomePage =() => {
  
  console.log ("HomePage: this is user",user);
  return (
    <div>
        <Navbar />
        <Upload />
        <TheModal />
        <UserContextProvider>
        <Map markers={user.markers}/>
        </UserContextProvider>
    </div>
  )
}

export default HomePage;