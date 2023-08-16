import React, { useState } from 'react'
import './Components/Exam.css';
import Count from './Components/Count';
import Modal from './Components/Modal';

const Exam = () => {
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(true);
  };

  const hideModal = () => {
    setModal(false);
  };

  return (
    <div className='examContainer'>
      <div className='div'>
        <Count />
      </div>
      <div className='div'>
        {modal ? <Modal show={modal} hide={hideModal} />
          : <button onClick={showModal} className='showBtn'>Show</button>
        }
      </div>
    </div>
  )
}

export default Exam