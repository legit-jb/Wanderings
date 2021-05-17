import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')

function TheModal () {
  const [isOpen, setIsOpen] = useState(false)

  function toggleModal () {
    console.log("Modal: functionToggleModal: ",isOpen)
    setIsOpen(!isOpen)
  }
  
  useEffect(() => {
    if (sessionStorage.getItem('AnnouncementOnce') !== 'true'){
    toggleModal()
    console.log("Modal: useEffect: ",isOpen)
    sessionStorage.setItem('AnnouncementOnce','true');
    }
  }, [])

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel='My dialog'
        className='mymodal'
        overlayClassName='myoverlay'
      >
        <div>
          <span className='text-center'>
            <h2>Disclaimer</h2>
          </span>
          <ul>
            <li>
              We’re not responsible if you walk into traffic or off of a cliff
            </li>
            <li>
              Please be responsible, pay attention, use your best judgement
            </li>
            <li>Don’t trespass or explore unsafe/abandoned structures</li>
          </ul>
          <div className='text-center'>
            <button onClick={toggleModal} className='btn custom-btn'>
              Agree
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default TheModal
