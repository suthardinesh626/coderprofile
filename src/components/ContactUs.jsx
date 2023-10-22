import React from 'react'
import '../style/contactus.css'
import gitQR from '../Image/gitQR.png'
import '../style/Aboutme.css'
const ContactUs = () => {
    return (
        <>
            <div className='footer-detail' id='Contact'>

                <div className='gitQR-link'>
                    {/* <img src={gitQR} /> */}
                </div>
                <form action="" className='contact-form'>
                    <label >Name:</label>
                    <input type="text" />
                    <label >Mobile No.</label>
                    <input type="text" />
                    <label >Query:</label>
                    <textarea name="" id="" cols="60" rows="8" placeholder='Type your query'></textarea>
                </form>
                <p></p>

            </div>
        </>
    )
}

export default ContactUs