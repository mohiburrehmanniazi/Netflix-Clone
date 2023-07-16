import React,{useState, useEffect} from 'react'
import '../App.css';
import { Link } from 'react-router-dom';






export default function MovieList({search}) {
  const [MovieList, setMovieList] = useState([])
  console.log(search)
  
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=5eb24d8a02882415942137db108adf72")
        .then(res => res.json())
        .then(data => setMovieList(data.results))
      },[])
    

  return (
    <>
    
    <h1 className='text-white text-2xl ml-20 mt-8'>MOVIES</h1>
  
      <div className='movie-container mx-1 flex py-3 px-4 justify-center' >
       
    {
    MovieList.filter((movie)=>{
        return search.toLowerCase() === ''? movie : movie.original_title.toLowerCase().includes(search)
    }).map(movie => (
    <Link to={`/MainMovCard/MainMovInfo/${movie.id}`}>
      <div className="mainMovCon flex py-3 px-4 justify-center grow-5">
            <div className="cards " >
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
    
