import React from 'react'
import MovieCard from './MovieCard'

export default function MovieList() {
    const movies = [{
        id: 1,
        url: "https://occ-0-1623-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRhjm7jL0yysST7EjziFl3d_4lXELxkYCVAzJaGv1ilVpKEzvqSyMRmgDAIuXNHWFe3tFxSqHHPtSvpwnAJxaxUIhRpRG0burwem5zOhcBVz3gMsOLYHv42EwUb9c2GLLpZoZ_nnK3AZKCyfYRJ4jSsFS8zKhXJR6jgq-xNBWL3EcQJvfXexOO-ygIK_7UI.jpg?r=3a5",
        title: "Extraction 2"
    },
    {
        id: 2,
        url: 'https://occ-0-1623-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdporPniMl37s2TC80f9Lq2PgILG19ApQSNnOVjNykLjezh_2A1itkBL0G3a45jE8HkzBj8SyvCn_jDzVugkoSLQfqZzL5ribhg.webp?r=265',
        title: "Supergirl"
    },
    {
        id: 3,
        url: 'https://occ-0-1623-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaFqjHb3t8XkDe9DIe8__HCywDjwu6-guN-p5NC95wsg7ic0CdIKUGWnx6fZBux2COhok64F4LqsvUKGEtf-o7y9yjQXgIPYr1E.webp?r=969',
        title: "Spiderman into the spider verse"
    },
    {
        id: 4,
        url: 'https://occ-0-1623-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABd9imS_1XBEtG4Mk92kk-dTXblyKn_FAP6BNndhis6SllJ5ySf8FJ_T8XIWR9Law4U5e8nsepEzncFQqQW8S9fbaYdmdOJgXrI6WImQnkkv8lUwab2O3UNz4KzUjXc-EBgf9hBJilvO1sDPbMl7twC7yS2dSO31zp7x2WJcf1dP62IIjLpFIAat7G8sb8As.jpg?r=e02',
        title: "Extraction"
    },
    {
        id: 5,
        url: 'https://occ-0-1623-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWUugFKpuXPkyu13zynGifdOseXFOZ1blNdPnPrQvCGCr3RYuETM1K9NYZxYXJ7QAxkYXINRC6afPGWbCNLsyrn41rZ0o5FLSXE.webp?r=d6e',
        title: "DC Legends of Tomorrow"
    }]

  return (
    <>
    <h1 className='text-white text-2xl ml-5 mt-2'>Movies</h1>
    <div className="flex py-3 px-4">
        {
            movies.map((movie)=> <MovieCard key={movie.id} url={movie.url} />)
        }
    </div>
    </>
  )
}
