import React from 'react'
import './footer.css';
import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className='gpt3__footer' >
      <div className='gpt3__footer-header'>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </div>
      <div className='gpt3__footer-button'>
        <button type='button' >Request Early Access</button>
      </div>
      <div className='gpt3__footer-footer'>
        <div className='gpt3__footer-footer-gpt3'>
          <img src={logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className='gpt3__footer-footer-content'>
          <h4>Links</h4>

          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-footer-content'>
          <h4>Company</h4>
          <p>Terms & Condition</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-footer-content'>
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className='gpt3__footer-rights'>
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer