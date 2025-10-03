import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

    const navigate = useNavigate();
  return (
    <div>
        <h2>404 || Page Not Found</h2>
        <br />
        <button className='Contact-btn' onClick={()=>navigate('/')}>Go To HomePage</button>
    </div>
  )
}

export default NotFound