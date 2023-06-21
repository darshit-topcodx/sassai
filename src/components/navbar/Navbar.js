import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './navbar.scss'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const Navbar = () => {
    const [toggle, settoggle] = useState(null);

    const handleClose = () => {
        document.getElementById("close_toggle").classList.add("close-res-nav")
        settoggle(null)
        setTimeout(() => {
            document.getElementById("close_toggle").classList.remove("close-res-nav")
            document.getElementById("close_toggle").classList.remove("res-close-nav")
        }, 700)
    }

    const handOpen = () => {
        document.getElementById("close_toggle").classList.add("res-close-nav")
    }

    return (
        <>
            <div className='Navbar'>
                <div className='logo'>
             
                    <h1 style={{color:"white"}}>DAVINCI</h1>
                </div>
                <div className='nav-content'>
                    <div className='nav-links'>
                        <a className='cool-link' href='#header-sec'>HOME</a>
                        <a className='cool-link' href='#team-sec'>PRICES</a>
                        <a className='cool-link' href='#blog-sec'>BLOGS</a>
                        <a className='cool-link' href='#articles'>FAQS</a>
                        <a className='cool-link' href='#contact-sec'>CONTACTS</a>
                    </div>
                    <SearchIcon style={{ color: 'white', width: '50px', height: '30px' }} />
                    <button>Sign up</button>
                </div>
                <div className='res-nav' style={{ color: 'white', width: '50px', height: '30px', color: 'white' }}>
                    <SearchIcon style={{ color: 'white', width: '50px', height: '30px' }} />
                    <MenuIcon onClick={handOpen} />
                </div>
            </div>
            <div id='close_toggle' className='res-div'>
                <div className='w-100 d-flex justify-content-between p-3'>
                    <h1>DAVINCI</h1>
                    <CloseIcon style={{ color: 'white', width: '50px', height: '30px' }} onClick={handleClose} />
                </div>
                <div className='d-flex flex-column gap-2 justify-content-center w-100 align-items-center mt-3 link'>
                    <a className='cool-link' href='#header-sec'>HOME</a>
                    <a className='cool-link' href='#team-sec'>PRICES</a>
                    <a className='cool-link' href='#blog-sec'>BLOGS</a>
                    <a className='cool-link' href='#articles'>FAQS</a>
                    <a className='cool-link' href='#contact-sec'>CONTACTS</a>
                </div>


            </div>
        </>
    )
}

export default Navbar;