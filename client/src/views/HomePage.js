import React from 'react'
import Map from "../components/Map";
import Navbar from "../components/Navbar";
import TheModal from "../components/Modal";

const HomePage =() => {
  
  return (
    <div>
        <Navbar />
        <TheModal />
        <Map />
    </div>
  )
}

export default HomePage;