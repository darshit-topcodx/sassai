import React from 'react'
import './footer.scss'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
const Footer = () => {
  return (
    <>
      <div className='inbox-sec'>
        <div className='ab-div'></div>
        <div className='container'>
          <div className='inbox-content'>
            <img src='https://i.pinimg.com/736x/fd/17/53/fd1753f50f60c9bf5363b1666f2cc5c0.jpg' style={{ width: '50px', height: '50px', borderRadius: '50%', marginBottom: '20px' }} />
            <h2>
              Get the best blog stories
            </h2>
            <h2>into your inbox!</h2>
            <div className='email-box'>
              <input placeholder='Enter Your Email Address' />
              <button> <span><TelegramIcon /></span>SUBSCRIBE</button>
            </div>
            <p className='check-box'><span><input type='checkbox' /></span>I agree to the Privacy Policy.</p>
          </div>
        </div>
        <div className='footers'>
          <div className='container'>
            <div className='footer-content'>
              <p>
                AncoraThemes © 2023. All Rights Reserved.
              </p>

              <div className='footer-links'>
                <p className='cool-link'>Home</p>
                <p className='cool-link'>Pages</p>
                <p className='cool-link'>Protfolio</p>
                <p className='cool-link'>Blog</p>
                <p className='cool-link'>Contacts</p>
              </div>
              <div className='social-icons'>
                <div><FacebookOutlinedIcon /></div>
                <div><TwitterIcon /></div>
                <div><SportsBasketballIcon /></div>
                <div> <InstagramIcon /> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;