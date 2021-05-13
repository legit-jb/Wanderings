import React, { useState } from 'react'

function Upload () {
  const [image, setImage] = useState('')
  const [url, setUrl] = useState('')

  const uploadImage = () => {
    const data = new FormData()
    data.append('file', image)
    data.append('upload_preset', 'mutxq4jo')
    data.append('cloud_name', 'dlzfsefy4')

    fetch('https://api.cloudinary.com/v1_1/dlzfsefy4/image/upload', {
      method: 'post',
      body: data
    })
      .then(res => res.json())
      .then(res => setUrl(res.secure_url))
      .catch(err => console.log(err))
  }

  return (
    <div className='card custom-card'>
      <div className='card-body'>
        <input
          className='form-control p-2'
          type='file'
          onChange={e => setImage(e.target.files[0])}
        />
        <button className='btn btn-secondary m-2' onClick={uploadImage}>
          upload
        </button>
        <div className='container'>
          <img src={url} />
        </div>
      </div>
    </div>
  )
}

export default Upload
