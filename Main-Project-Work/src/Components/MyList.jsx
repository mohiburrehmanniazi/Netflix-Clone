import { useContext, useState } from 'react'
import { MyListContext } from '../Context/MyListContext'
import MovieCard from "./MovieCard"
// import { Navbar } from './Navbar'


function MyList() {
  const { myList } = useContext(MyListContext)
  console.log(myList)

  return (
    <>
    <h1 className='text-white text-3xl my-3 ml-4'>My list</h1>
    <div className="f-container ml-4">
      {
        myList.map((movie)=> (
            <MovieCard key={movie.id} url={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} title={movie ? movie.original_title: ""}/>
        ))
        
      }
    </div>
    </>
  )
}

export default MyList
