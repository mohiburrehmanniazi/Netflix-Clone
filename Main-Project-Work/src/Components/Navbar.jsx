/* eslint-disable no-unused-vars */
import React from 'react';
import '../App.css';
import NetflixLogo from '../assets/NetflixLogo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from "./ImageSlider";
import MovieList from "./MovieList";

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
      <div className='flex justify-between items-center sticky top-0 z-10'>
        <nav className='navbar'>
            <div className='img_container'>
               <Link to='/'> <img className='netflix_logo' src={NetflixLogo} alt="" /></Link> 
            </div>
            <div className='categories '>
                <Link to='/movies/TV_Shows' className='hover:text-red-600 text-white ml-6 text-xl'>TV Shows</Link>
                <Link to='/movies/Movies' className='hover:text-red-600 text-white ml-4 ml-8 text-xl' >Movies</Link>
                <Link to='/movies/Upcoming' className='hover:text-red-600 text-white ml-4 ml-8 text-xl' >Upcoming</Link>
                <Link to='/movies/My_List' className='hover:text-red-600 text-white ml-4 ml-8 text-xl' >My List</Link>
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
          }} placeholder="Titles, people, genres" onChange={handleChange} />
        </div>
      </div>
      <ImageSlider />
        <MovieList search={search}/>
    </>
  )
}

export default Navbar