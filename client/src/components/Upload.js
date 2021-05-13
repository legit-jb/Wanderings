import React, { useState } from 'react'

function Upload () {
  const [image, setImage] = useState("");

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
      .then(data => {
        console.log(data)
      })
      .catch(err => console.log(err))
  }

  return (
      <div className="bg-light">
          <input className="form-control" type="file" onChange={(e) => setImage(e.target.files[0])} />
          <button className="btn" onClick={uploadImage}>upload</button>
      </div>
  )
}

export default Upload;
