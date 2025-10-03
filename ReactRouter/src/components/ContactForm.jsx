import React from 'react'

const ContactForm = () => {
  return (
    <div>
        <form>
            <input type='email' placeholder='Enter Email' />
            <br />
            <input type='number' placeholder='Enter Phone Number' />
            <br />
            <input type='text' placeholder='enter Address'/>
            <br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default ContactForm