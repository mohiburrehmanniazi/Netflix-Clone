/* eslint-disable no-unused-vars */
import React from 'react';
import '../App.css';
import NetflixLogo from '../assets/NetflixLogo.png';
import { useState } from 'react';

function Navbar() {
  const [displayProp, setDisplayProp] = useState('none')
  const [search, setSearch] = useState('')

  const handleClick = () => {
    let search = document.querySelector('.search')
    search.classList.toggle('active')
    if (displayProp == 'none') {
      setDisplayProp('inline-block')
    }
    else {
      setDisplayProp('none')
    }
  }

  let searchbar = document.querySelector('#searchbar')

  document.addEventListener("click", function (event) {
    if (event.target.closest(".search")) 
      return
    if(searchbar!=null){
      searchbar.classList.remove('active')
      setDisplayProp('none')
    }
  })

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <div className='flex justify-between items-center'>
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

        <div id='searchbar' className="search mr-16">
          <i className="fa fa-search" style={{
            fontSize: "24px",
            margin: "0 4px",
            color: "white"
          }} onClick={handleClick}></i>

          <input type="text" style={{
            display: displayProp
          }} placeholder="Titles, people, genres" value={search} onChange={handleChange} />
        </div>
      </div>
    </>
  )
}

export default Navbar