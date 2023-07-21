/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Modal.css'

const Modal = ({closeModal ,message}) => {
  return (
    <div className='modalBg'>
        <div className="modalContainer">
            <div className="body">
                <p className='msg'>{message}</p>
            </div>
            <div className="footer">
                <button className="modalBtn" onClick={()=>closeModal(false)}>Ok</button>
            </div>
        </div>

    </div>
  )
}

export default Modal