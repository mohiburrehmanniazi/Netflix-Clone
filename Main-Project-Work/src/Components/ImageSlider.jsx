/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import "react-slideshow-image/dist/styles.css";
import { Slide } from 'react-slideshow-image';
import '../App.css';
import { Link } from 'react-router-dom';

function ImageSlider() {

    const [popularMovies, setPopulerMovies] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=5eb24d8a02882415942137db108adf72")
            .then(res => res.json())
            .then(data => setPopulerMovies(data.results))
    }, [])

    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '650px',
        backgroundSize: 'cover',
        border: 'none',


    }

    return (
        <div className='slide_container '>
            <Slide>
                {popularMovies.map(movie => (
                    <Link to={`/MainMovCard/MainMovInfo/${movie.id}`}>
                        <div style={divStyle} >
                            <div className='new'>
                                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} /></div>
                            <div className='new titleSlide font-serif mt-48 absolute bg-transparent text-white font-bold text-5xl '>
                                <div className=' bg-transparent'>{movie && movie.original_title} </div>
                                <div className='bg-transparent text-xl'>{`Release Date: ${movie && movie.release_date}`}</div>
                            </div>
                        </div>
                    </Link>
                ))}

            </Slide>
        </div>
    )
}

export default ImageSlider