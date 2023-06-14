import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './navbar.scss'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const Navbar = () => {
    const [toggle, setToggle] = useState(null);
    const [closeAnimation, setCloseAnimation] = useState(null);


    return (
        <>
            <div className='Navbar'>
                <div className='logo'>
                    <img src='https://cryptocurrency.qwery.ancorathemes.com/wp-content/uploads/2021/05/logo-inverse.png' />
                </div>
                <div className='nav-content'>
                    <div className='nav-links'>
                        <p className='cool-link'>Home</p>
                        <p className='cool-link'>Pages</p>
                        <p className='cool-link'>Protfolio</p>
                        <p className='cool-link'>Blog</p>
                        <p className='cool-link'>Contacts</p>
                    </div>
                    <SearchIcon style={{ color: 'white', width: '50px', height: '30px' }} />
                    <button>Let's Talk</button>
                </div>
                <div className='res-nav' style={{ color: 'white', width: '50px', height: '30px', color: 'white' }}>
                    <SearchIcon style={{ color: 'white', width: '50px', height: '30px' }} />
                    <MenuIcon onClick={() => { setToggle(true) }} />
                </div>

            </div>
            <div className={`ress-nav ${toggle ? 'animate_class' : `${toggle === null && closeAnimation === true ? 'animate_class_close' : 'animate_class_close-1'}`}`}>
                <div className='d-flex justify-content-between mt-4 ps-3'>
                    <img src='https://cryptocurrency.qwery.ancorathemes.com/wp-content/uploads/2021/05/logo-inverse.png' />
                    <CloseIcon onClick={() => {
                        setToggle(null)
                        setCloseAnimation(true)
                    }
                    } style={{ color: 'white', marginRight: '30px', height: '30px', width: '30px' }} className='rounds' />
                </div>
                <div className='nav-links'>
                    <p className='cool-link'>Home</p>
                    <p className='cool-link'>Pages</p>
                    <p className='cool-link'>Protfolio</p>
                    <p className='cool-link'>Blog</p>
                    <p className='cool-link'>Contacts</p>
                    <div className='lines'></div>
                </div>
            </div>
        </>
    )
}

export default Navbar;