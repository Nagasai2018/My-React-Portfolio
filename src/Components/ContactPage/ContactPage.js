import React from 'react'
import "./index.css"

const ContactPage = () => {
  return (
    <div className='form bg-dark'>
      <h2 className='text-center pt-4 mb-0 pb-0'>Contact Me?</h2>
      <form>
        <label>Your Name :</label>
        <input placeholder='Enter Your Name Here' type='text' required></input>

        <label>Your Email :</label>
        <input placeholder='Enter Your Mail' type='email' required></input>

        <label>Your Subject :</label>
        <input placeholder='Enter Your Subject' type='text' required></input>
        
        <label>Your Query :</label>
        <textarea placeholder='Enter Your Query' rows="6" required/>

        <button className="btn btn-success" >Submit Form</button>
      </form>
    </div>
  )
}

export default ContactPage

