import React,{useState, useEffect, useContext} from 'react'
import '../App.css';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';
import { MyListContext } from '../Context/MyListContext';




export default function TvShow() {
  const [MovieList, setMovieList] = useState([])
  const {search} = useContext(MyListContext)
  
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/tv/popular?api_key=5eb24d8a02882415942137db108adf72")
        .then(res => res.json())
        .then(data => setMovieList(data.results))
      },[])

      console.log(MovieList)

  return (
    <>
    
    <h1 className='text-white text-2xl ml-20 mt-8'>TV SHOWS</h1>
    
    <div className='movie-container mx-1 flex py-3 px-4 justify-center' >
    {
    MovieList.filter((movie)=>{
      return search.toLowerCase() === ''? movie : movie.original_name.toLowerCase().includes(search)
  })
    .map(movie => (
      <Link to={`/MainMovCard/MainTvInfo/${movie.id}`}>
      <div className="mainMovCon flex py-3 px-4 justify-center grow-5">
            <MovieCard key={movie.id} url={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} title={movie ? movie.original_name: ""}/>
      </div>
      </Link>
    ))
    }
    
    </div>

    </>
    )}
    