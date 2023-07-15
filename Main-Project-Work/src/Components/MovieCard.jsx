import React from "react";


export default function MovieCard({ movie }) {
  
  return (
    <>
          <div className="flex py-3 px-4 justify-center">
            <div className="movie-container mx-1">
              <img className="movies" src={`https://image.tmdb.org/t/p/original${movie?movie.backdrop_path:""}`}/>
             <div>{movie ? movie.original_title: ""}</div>
            </div>
          </div>
        
      
    </>
  );
}
