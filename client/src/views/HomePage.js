import React from 'react'
import Map from "../components/Map";
import Navbar from "../components/Navbar";
import Upload from "../components/Upload";
import TheModal from "../components/Modal";
import {fakeUser as user} from "../components/FakeDBUser";



const HomePage =() => {
  
  console.log ("HomePage: this is user",user);
  return (
    <div>
        <Navbar user = {user} />
        <Upload />
        <TheModal />
        <Map markers={user.markers}/>
    </div>
  )
}

export default HomePage;