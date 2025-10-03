import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  
  const navigate = useNavigate();

  return (
    <div>
        <h1>Contact Page</h1>
        <div className='contact-buttons'>
          <button className='Contact-btn' onClick={() => navigate('info')}>Contact Info</button>
          <button className='Contact-btn' onClick={() => navigate('form')}>Contact Form</button>
        </div>
    </div>
  )
}

export default Contact