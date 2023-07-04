import React from 'react'

export default function MovieCard({id, url}) {
    

  return (
    <>
    <div className='movie-container mx-1' >
      <img className='movies' id={id} src={url} alt="" /> 
    </div>
    
    
    </>
  )
}
