import React, { useState } from 'react'
import Coordinates from 'coordinate-parser'
import API from '../utils/API'
import Navbar from './Navbar'

function Upload () {
  const [image, setImage] = useState('')
  const [url, setUrl] = useState('')
  const [markerData, setMarkerData] = useState({
    title: '',
    image: '',
    tags: '',
    lat: '',
    lon: '',
    comments: ''
  })

  const uploadImage = e => {
    e.preventDefault()
    const data = new FormData()
    data.append('file', image)
    data.append('upload_preset', 'mutxq4jo')
    data.append('cloud_name', 'dlzfsefy4')

    fetch('https://api.cloudinary.com/v1_1/dlzfsefy4/image/upload', {
      method: 'post',
      body: data
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setUrl(res.secure_url)
        massageData(res)
      })
      .catch(err => console.log(err))
  }

  const massageData = data => {
    let rawLat = data.image_metadata.GPSLatitude
    let rawLong = data.image_metadata.GPSLongitude

    let lat1 = rawLat.replace('deg', '°')
    let lon1 = rawLong.replace('deg', '°')

    let coord = lat1 + lon1

    let position = new Coordinates(coord)
    let latitude = position.getLatitude()
    let longitude = position.getLongitude()

    console.log(latitude, longitude)

    setMarkerData({
      ...markerData,
      image: data.secure_url,
      lat: latitude,
      lon: longitude
    })
  }

  const handleInputChange = event => {
    const { name, value } = event.target
    setMarkerData({
      ...markerData,
      [name]: value
    })
    console.log(markerData)
  }

  const saveImage = e => {
    e.preventDefault()
    console.log(markerData)

    API.saveMarker({
      title: markerData.title,
      image: markerData.image,
      tags: markerData.tags,
      lat: markerData.lat,
      lon: markerData.lon,
      comments: markerData.comments
    })
      .then(() => console.log(markerData))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <Navbar />
      <div className='container'>
        <div className='card custom-card'>
          <form>
            <input
              className='form-control m-2'
              type='file'
              id='formFile'
              onChange={e => setImage(e.target.files[0])}
            />
            <button className='btn custom-btn m-2' onClick={uploadImage}>
              upload
            </button>
            <input
              className='form-control m-2'
              type='text'
              name='title'
              placeholder='title'
              onChange={handleInputChange}
            />
            <input
              className='form-control m-2'
              type='text'
              name='comments'
              placeholder='caption (optional)'
              onChange={handleInputChange}
            />
            <input
              className='form-control m-2'
              type='text'
              name='tags'
              placeholder='tags, separated by commas'
              onChange={handleInputChange}
            />
            <button className='btn custom-btn m-2' onClick={saveImage}>
              save
            </button>
          </form>
          <div className='container'>
            <img src={url} className='display-image' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Upload
