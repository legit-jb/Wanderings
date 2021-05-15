import React from 'react'
import Map from "../components/Map";
import Navbar from "../components/Navbar";
import Upload from "../components/Upload";
import TheModal from "../components/Modal";
import TagContextProvider from "../contexts/UserContext";

const HomePage =() => { 
  return (
    <div>
        <Navbar />
        <Upload />
        <TheModal />
        <TagContextProvider>
        <Map />
        </TagContextProvider>
    </div>
  )
}

export default HomePage;