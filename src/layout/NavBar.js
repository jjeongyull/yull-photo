import React from 'react';

import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  // 이동
  const goConcept = () => {
    navigate('/concept');
  }
  const goImages = () => {
    navigate('/images');
  }
  const goAbout = () => {
    navigate('/about');
  }
  const goFeed = () => {
    navigate('/feed');
  }
  const goContact = () => {
    navigate('/contact');
  }
  return (
    <div className='nav-ma'>
      <div className='header'>
        <h1 className='logo'>
          <a href='/'>Yull ST</a>
        </h1>
        <ul className='menu'>
          <li className='menu-li' onClick={goConcept}>CONCEPT</li>
          <li className='menu-li' onClick={goImages}>IMAGES</li>
          <li className='menu-li' onClick={goAbout}>ABOUT</li>
          <li className='menu-li' onClick={goFeed}>FEED</li>
          <li className='menu-li' onClick={goContact}>CONTACT</li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar;