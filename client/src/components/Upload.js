import React, { useState } from 'react'
import Coordinates from 'coordinate-parser'
import API from '../utils/API'
import Navbar from './Navbar'

function Upload () {
  const [image, setImage] = useState('')
  const [url, setUrl] = useState('')
  const [markerData, setMarkerData] = useState({
    user_id:"60a01207f65faee88a5ac831",
    title: '',
    image: 'astring',
    tags: '',
    lat: '48',
    lon: '-48',
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
  }

  const resetForm = () => {
    document.getElementById('uploadForm').reset()
    setUrl(' ')
  }

  const saveImage = e => {
    e.preventDefault()
    console.log(markerData);

    // let tagString = document.getElementById('formTags').value
    // let imgTags = tagString.split(',')
    // setMarkerData({...markerData, tags: imgTags});

    API.saveMarker({
      user_id: markerData.user_id,
      title: markerData.title,
      image: markerData.image,
      tags: markerData.tags,
      lat: markerData.lat,
      lon: markerData.lon,
      comments: markerData.comments
    })
      .then(console.log(markerData))
      .then(resetForm())
      .catch(err => console.log(err))
  }

  return (
    <div>
      <Navbar />
      <div className='container d-flex justify-content-center'>
        <div className='card custom-card text-center'>
        <p className="mt-3">Select file and click "upload", then enter info and click "save" to save to a marker and clear the form.</p>
          <form id='uploadForm'>
            <div className='row m-2'>
              <label
                for='formFile'
                className='form-label col-sm-1 col-form-label'
              >
                File
              </label>
              <div className='col-sm-10'>
                <input
                  className='form-control m-2'
                  type='file'
                  id='formFile'
                  onChange={e => setImage(e.target.files[0])}
                />
              </div>
            </div>
            <button className='btn custom-btn m-2' onClick={uploadImage}>
              upload
            </button>
            <div className='row m-2'>
              <label
                for='formTitle'
                className='form-label col-sm-1 col-form-label'
              >
                Title
              </label>
              <div className='col-sm-10'>
                <input
                  className='form-control'
                  type='text'
                  id='formTitle'
                  name='title'
                  placeholder='title'
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className='row m-2'>
              <label
                for='formCaption'
                className='form-label col-sm-1 col-form-label'
              >
                Caption
              </label>
              <div className='col-sm-10'>
                <input
                  className='form-control'
                  type='text'
                  id='formCaption'
                  name='comments'
                  placeholder='caption (optional)'
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className='row m-2'>
              <label
                for='formTags'
                className='form-label col-sm-1 col-form-label'
              >
                Tags
              </label>
              <div className='col-sm-10'>
                <input
                  className='form-control'
                  type='text'
                  id='formTags'
                  name='tags'
                  placeholder='tags, separated by commas'
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <button className='btn custom-btn m-2' onClick={saveImage}>
              save
            </button>
          </form>
          <div className='container'>
            {/* <p>All done? Return <Link to='/home'>Home</Link></p> */}
            <img src={url} className='display-image' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Upload
