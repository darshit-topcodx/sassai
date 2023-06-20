import React from 'react'
import './footer.scss'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <>
      <div className='footer-sec'>
        <div className='container'>
          <div className='footer-content'>
            <div className='ft-1'>
              <h1>DAVINCI</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut culpa maiores maxime illo nostrum aut totam, porro dolore minima</p>
              <p>EN</p>
            </div>
            <div className='ft-2'>
              <p>Information</p>
              <p>AI World</p>
            </div>
            <div className='ft-3'>
              <p>Site Pages</p>
              <p>Login</p>
              <p>Register</p>
            </div>
            <div className='ft-4'>
              <p>Company</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div >
            <div className='ft-5'>
              <p>Social Media</p>
              <p>Follow up on social media to find out the latest updates.</p>
              <div>
                <FacebookOutlinedIcon />
                <TwitterIcon />
                <InstagramIcon />
                <LinkedInIcon />
              </div>
              <p>Get Started Today</p>
              <button>
                SIGN UP NOW
              </button>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Footer;