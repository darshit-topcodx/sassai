import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './navbar.scss'
import Back1 from '../../images/back1.jpg'
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
    return (
        <>
            {/* <img src={Back1} className='back-img-1' /> */}
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
                    <MenuIcon />
                </div>
            </div>
        </>
    )
}

export default Navbar;