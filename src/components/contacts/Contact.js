import React from 'react'
import './Contact.css'
import microsoft from '../../assets/ms.jpg'
import Linkedin from '../../assets/linkedin.png'
import facebook from '../../assets/fb.png'
import instagram from '../../assets/instagram.jpg'
import twitter from '../../assets/twitter.jpeg'
const Contact = () => {
  return (
     <section id="contactpage">
        <div id='clients'>
            <h1 className="title">CLIENTS</h1>
            <p className="desc"></p>
            <div className="images">
                <img src={microsoft} alt="" className="clientimg" />
                <img src={Linkedin} alt="" className="clientimg" />
                <img src={facebook} alt="" className="clientimg" />
            </div>
        </div>
        <div id='contact'>
          <h1 className="pagetitle">Contact me</h1>
          <span className="desc2">Please fill out the form</span>
          <form className="form">
            <input type="text" className="name" placeholder='your name ' />
            <input type="email" className="email" placeholder='your email ' />
            <textarea className="msg" name='message' rows="5" placeholder='your message'></textarea>
             <button type='submit' value='send' className="submitbtn">Submit</button>
             <div className="links">
              <img src={facebook} alt="" className='link'  />
              <img src={Linkedin} alt="" className='link'  />
              <img src={instagram} alt="" className='link'  />
              <img src={twitter} alt="" className='link'  />
             </div>
          
          
          </form>
        </div>
     </section>
  )
}

export default Contact