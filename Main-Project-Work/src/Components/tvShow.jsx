import React,{useState, useEffect} from 'react'
import '../App.css';
import { Link } from 'react-router-dom';




export default function TvShow() {
  const [MovieList, setMovieList] = useState([])
  
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/tv/popular?api_key=5eb24d8a02882415942137db108adf72")
        .then(res => res.json())
        .then(data => setMovieList(data.results))
      },[])

  return (
    <>
    
    <h1 className='text-white text-2xl ml-20 mt-8'>TV SHOWS</h1>
    
    <div className='movie-container mx-1 flex py-3 px-4 justify-center' >
    {
    MovieList.map(movie => (
      <Link to={`/MainMovCard/MainTvInfo/${movie.id}`}>
      <div className="mainMovCon flex py-3 px-4 justify-center grow-5">
            <div className="cards mx-1">
              <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`}/>
             <div>{movie ? movie.original_title: ""}</div>
            </div>
          </div>
        </Link>
    ))
    }
    
    </div>

    </>
    )}
    