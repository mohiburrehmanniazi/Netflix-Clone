/* eslint-disable no-unused-vars */
import React from 'react';
import '../App.css';
import NetflixLogo from '../assets/NetflixLogo.png';

function Navbar() {
  return (
    <>
        <nav className='navbar'>
            <div className='img_container'>
                <img className='netflix_logo' src={NetflixLogo} alt="" />
            </div>
            <div className='categories'>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>Recently Added</li>
                <li>My List</li>
            </div>
        </nav>
    </>
  )
}

export default Navbar