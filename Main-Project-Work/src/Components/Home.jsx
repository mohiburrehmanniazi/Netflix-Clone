import React from 'react'
import { MyListContext } from '../Context/MyListContext'
import { useContext } from 'react'
import ImageSlider from './ImageSlider'
import MovieList from './MovieList'
import TvShow from './TvShow'

function Home() {
    const {search} = useContext(MyListContext)
  return (
    <div>
      { search==="" ? ( 
          <>
          <ImageSlider />
          <MovieList/>
          <TvShow/>
          </>
      ) : (
            <>
            <MovieList/>
            <TvShow/>
            </>
        )
            
      }
    </div>
  )
}

export default Home
