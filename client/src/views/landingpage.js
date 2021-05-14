import React from 'react'
import AuthenticationButton from "../components/authentication-button";
import Map from "../components/Map";

const LandingPage =() => {
  const sample = [
    {
      id:"15572374ghg",
      image:"https://maps.googleapis.com/maps/api/streetview?channel=mb-pdp-publicrecord&location=601+N+4th+St%2C+Philadelphia%2C+PA+19123&size=665x441&source=outdoor&client=gme-redfin&signature=-r9bhng_XkHepi3-Gqgy10icm0E=",
      name: "my old apt",
      lat: 39.961840,
      long: -75.144620,
      comments:"I really miss this place"
    },
    {
      id:"155723342ghg",
      image:"https://www.highergroundscafe.com/uploads/b/0b694f4168c9c89c234c7495918c3b129a228aa6a0a1a6bac5a7c8aa673599ac/Screenshot_20200508-204218_Facebook_1588985171.jpg?width=400",
      name: "higher grounds cafe",
      lat: 39.962060,
      long: -75.142930,
      comments:"one of my best friends"
    },
    {
      id:"1455723342ghg",
      image:"https://theabbaye.net/wp-content/uploads/2020/08/abstract-1.jpg",
      name: "The Abbaye",
      lat: 39.962230,
      long: -75.142980,
    },
  ]
  return (
    <div>
        <AuthenticationButton />
        <Map markers={sample}/>
    </div>
  )
}

export default LandingPage