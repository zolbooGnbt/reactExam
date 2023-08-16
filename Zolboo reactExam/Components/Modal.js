import React from 'react'
import './Exam.css';

const Modal = ({ hide }) => {

    return (
        <div className='modal'>
            <div className='modalContent'>
                <h1 className='modalTitle'>Modal</h1>
                <p className='modalParag'>Modal content</p>
                <button onClick={hide} className='modalBtn'>Close</button>
            </div>
        </div>
    )
}

export default Modal