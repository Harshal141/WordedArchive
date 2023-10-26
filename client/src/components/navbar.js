import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';

import png from '../assets/user-icon.png'
import obook from '../assets/open-book.png'
import cbook from '../assets/close-book.png'
import dashboard1 from '../assets/dashboard-icon.png'

const Navbar = () => {

  const [isClicked, setIsClicked] = useState(false);

  const handleClicktoChangeNavbar = () => {
    setIsClicked(!isClicked);
  }

  return (
    <div className='rgnav'>
      <div className='rgtoggle' style={{ left: isClicked ? '0px' : '-70%' }}>
      <button className='rgdashboard' style={{ backgroundColor: '#3973ca'}}> <Link style={{ display: 'flex' , alignItems: 'center' }}> <img id='rgdashboardIcon' src={dashboard1} /> Dashboard </Link>  </button>
          <button className='rgdashboard' style={{ backgroundColor: '#3973ca' }}> <Link to='/upload'> &#x270e;
            Upload Pdf</Link>   </button>
          <button className='rgdashboard'> <Link to='/explore'>Explore</Link> </button>
      </div>
      <div className='navpart1'>
        <img id='navbar-toggle' onClick={handleClicktoChangeNavbar} style={{ width: '30px' }} src={isClicked ? obook : cbook} />
        <div className='rglinks'>
          <button className='rgdashboard' style={{ backgroundColor: '#3973ca'}}> <Link to='/' style={{ display: 'flex' , alignItems: 'center' }}> <img id='rgdashboardIcon' src={dashboard1} /> Dashboard </Link>  </button>
          <button className='rgdashboard' style={{ backgroundColor: '#3973ca' }}> <Link href='/upload'> &#x270e;
            Upload Pdf</Link>  </button>
          <button className='rgdashboard'> <Link to='/explore'>Explore</Link> </button>
        </div>
      </div>
      <div className='navpart2'>
        <button className='rgdashboard' style={{ backgroundColor: '#91a0ff' }}> <Link to='/resume'>	&#x2611; Publish Resume</Link> </button>
        <button><Link to="/signup"> <img className='rgprofile' src={png} alt='' /> </Link></button>
      </div>
    </div>
  )
}

export default Navbar;