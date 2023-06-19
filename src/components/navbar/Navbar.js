import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './navbar.scss'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const Navbar = () => {
    const [toggle, settoggle] = useState(null);
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
                    <MenuIcon onClick={() => { settoggle(true) }} />
                </div>
            </div>
            <div className={`${toggle ? 'res-div' : 'close-res-nav'}`}>
                <div className='w-100 d-flex justify-content-between p-3'>
                    <h1>DAVINCI</h1>
                    <CloseIcon style={{ color: 'white', width: '50px', height: '30px' }} onClick={() => { settoggle(null) }} />
                </div>
                <div className='d-flex flex-column gap-2 justify-content-center w-100 align-items-center mt-3 link'>
                    <p className='cool-link'>Home</p>
                    <p className='cool-link'>Pages</p>
                    <p className='cool-link'>Protfolio</p>
                    <p className='cool-link'>Blog</p>
                    <p className='cool-link'>Contacts</p>
                </div>


            </div>
        </>
    )
}

export default Navbar;