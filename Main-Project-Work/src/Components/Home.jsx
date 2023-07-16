import React from 'react'

function Home() {
  return (
    <div>
      <ImageSlider />
      <MovieList search={search}/>
    </div>
  )
}

export default Home
