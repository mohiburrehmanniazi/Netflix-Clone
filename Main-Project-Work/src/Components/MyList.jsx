import { useContext, useState } from 'react'
import { MyListContext } from '../Context/MyListContext'
import MovieCard from "./MovieCard"
import Navbar from './Navbar'
import { Link } from 'react-router-dom'


function MyList() {
  const { myList } = useContext(MyListContext)
  // console.log(myList)

  return (
    <>
    <Navbar/>
    <h1 className='text-white text-3xl my-3 ml-4'>My list</h1>
    <div className="f-container ml-4">
      {
        myList.map((movie)=> (
          <Link to={`/MainMovCard/${movie.hasOwnProperty('first_air_date')? "MainTvInfo": "MainMovInfo"}/${movie.id}`}>

          <MovieCard key={movie.id} url={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} title={movie ? movie.original_title: ""}/>
          </Link>
        ))
        
      }
    </div>
    </>
  )
}

export default MyList
