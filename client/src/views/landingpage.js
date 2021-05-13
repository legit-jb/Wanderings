import React from 'react'
import AuthenticationButton from "../components/authentication-button";
import Map from "../components/Map";

const LandingPage =() => {
  const sample = [
    {
      id:"15572374ghg",
      name: "coal harbor BC",
      lat: 50.599340,
      long: -127.583580,
    },
    {
      id:"155723342ghg",
      name: "canada place",
      lat: 49.288220,
      long: -123.115720,
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