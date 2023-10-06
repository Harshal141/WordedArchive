import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import png from './icons8-male-user-94.png'

import obook from './open-book.png'
import cbook from './close-book.png'

import dashboard1 from './icons8-menu-40.png'

const Navbar = () => {

  const [tr, setTr] = useState(false);

  const handleClick = () => {
    setTr(!tr);
  }

  return (
    <div className='rgnav'>
      <div className='rgtoggle' style={{ left: tr ? '0px' : '-70%' }}>
      <button className='rgdashboard' style={{ backgroundColor: '#3973ca'}}> <Link style={{ display: 'flex' , alignItems: 'center' }}> <img id='rgdashboardIcon' src={dashboard1} /> Dashboard </Link>  </button>
          <button className='rgdashboard' style={{ backgroundColor: '#3973ca' }}> <Link href='/upload'> &#x270e;
            Upload Pdf</Link>  <i class='fas fa-arrow-circle-up'></i> </button>
          <button className='rgdashboard'> <Link href='/community'>Explore</Link> </button>
      </div>
      <div className='navpart1'>
        <img id='navbar-toggle' onClick={handleClick} style={{ width: '30px' }} src={tr ? obook : cbook} />
        <div className='rglinks'>
          <button className='rgdashboard' style={{ backgroundColor: '#3973ca'}}> <Link style={{ display: 'flex' , alignItems: 'center' }}> <img id='rgdashboardIcon' src={dashboard1} /> Dashboard </Link>  </button>
          <button className='rgdashboard' style={{ backgroundColor: '#3973ca' }}> <Link href='/upload'> &#x270e;
            Upload Pdf</Link>  <i class='fas fa-arrow-circle-up'></i> </button>
          <button className='rgdashboard'> <Link href='/community'>Explore</Link> </button>
        </div>

      </div>
      <div className='navpart2'>
        <button className='rgdashboard' style={{ backgroundColor: '#91a0ff' }}> <Link href='/resume'>	&#x2611; Publish Resume</Link> </button>
        <button><img className='rgprofile' src={png} alt='' /> </button>
      </div>
    </div>
  )
}

export default Navbar;