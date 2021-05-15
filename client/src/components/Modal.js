import React, { useEffect, useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

function TheModal() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  };

  // pops the modal up only one time when the page is loaded
  useEffect(() => {
    toggleModal();
  }, []);

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
      >
        <div>
          <h2>Disclaimer</h2>
          <ul>
            <li>
              We’re not responsible if you walk into traffic or off of a cliff
            </li>
            <li>
              Please be responsible, pay attention, use your best judgement
            </li>
            <li>Don’t trespass or explore unsafe/abandoned structures</li>
          </ul>
          <button onClick={toggleModal} className="btn custom-btn">
            Agree
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default TheModal;
