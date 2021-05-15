import React from 'react'
import Map from "../components/Map";
import Navbar from "../components/Navbar";
import Upload from "../components/Upload";
import TheModal from "../components/Modal";
import {fakeUser as user} from "../components/FakeDBUser";

const HomePage =() => {
  
  return (
    <div>
        <Navbar />
        <Upload />
        <TheModal />
        <Map markers={user.markers}/>
    </div>
  )
}

export default HomePage;