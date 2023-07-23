import React from 'react'
import { MyListContext } from '../Context/MyListContext'
import { useContext } from 'react'
import ImageSlider from './ImageSlider'
import MovieList from './MovieList'
import TvShow from './TvShow'
import Navbar from './Navbar'
import UpComing from './UpComing'

function Home() {
    const {search} = useContext(MyListContext)
  return (
    <>
    <Navbar/>
    <div>
      { search==="" ? ( 
          <>
          <ImageSlider />
          <MovieList/>
          <TvShow/>
          <UpComing/>
          </>
      ) : (
            <>
            <MovieList/>
            <TvShow/>
            <UpComing/>
            </>
        )
            
      }
    </div>
    </>
  )
}

export default Home
