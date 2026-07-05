import React, { useState } from 'react'
import './ContactUs.css'
import message_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const ContactUs = () => {
   //Web 3 Forms
  //get token from web3forms.com
    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "242a93da-886a-4c77-affc-20baf733b6be");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <div className='contact-us'>
        <div className="contact-col">
         <h3>Send us a Message <img src={message_icon} alt="" /></h3>
         <p>Feel free to reach out through contact form or find our contact information below.
            Your feedback, questions, and suggestions
            are important to us as we strive to provide exceptional service to our university community.</p>
            <ul>
               <li> <img src={mail_icon} alt="" />Contact@Office</li>
               <li><img src={phone_icon} alt="" />+91 9360502401</li>
               <li> <img src={location_icon} alt="" />77 Virat Street, <br />MA ,chennai,India</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your Name' required />
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your Mobile No' required/>
                <label>Write your messages here</label>
                <textarea name="message"  rows="6" placeholder='Enter your Message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>

        </div>

    </div>
  )
}

export default ContactUs