import React, {useEffect, useState, useContext} from "react"
import "./movie.css"
import { useParams, useNavigate } from "react-router-dom"
import { MyListContext } from "../Context/MyListContext"
import Navbar from "../Components/Navbar"
import MainReview from "../MainReview/mainrev"

const state = JSON.parse(window.localStorage.getItem("btn")) || "Add to MyList"

const MainUpInfo = () => {
    const [currentMovieDetail, setMovie] = useState()
    const [btnState, setBtnState] = useState(state)

    const { id } = useParams()
    const navigate = useNavigate()
    const { setMyList } = useContext(MyListContext)
    const { myList } = useContext(MyListContext)

    useEffect(() => {
        getData()
        window.scrollTo(0,0)
    }, [])

    useEffect(()=>{
        window.localStorage.setItem('btn', JSON.stringify(btnState))
   }, [btnState])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5eb24d8a02882415942137db108adf72&language=en-US`)
        .then(res => res.json())
        .then(data => setMovie(data))
    }

    useEffect(()=>{
        if (myList !== 0 && currentMovieDetail !== undefined){
            let hasItem = myList.find((item)=> item.id === currentMovieDetail.id)
            if(hasItem!==undefined){
             setBtnState("Remove from MyList")
            }
            else{
             setBtnState("Add to MyList")
            }
         }
    }, [currentMovieDetail])

    const addToList = (e) => {
        if (e.target.innerHTML == 'Add to MyList') {
            myList.push(currentMovieDetail)
            setMyList(myList)
            console.log(myList)
            setBtnState("Remove from MyList")
            // console.log(btnState)
        }
        else if (e.target.innerHTML == 'Remove from MyList') {
            const toBeDeletedIndex = myList.findIndex((item) => item.id === currentMovieDetail.id)
            myList.splice(toBeDeletedIndex, 1)
            setMyList(myList)
            setBtnState('Add to MyList')
        }
    }

    return (
        <>
        <Navbar/>
        <div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                        <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                        <div className="movie__rating">
                            {currentMovieDetail ? currentMovieDetail.vote_average: ""} <i class="fas fa-star" />
                            <span className="movie__voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                        </div>  
                        <div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                        <div className="movie__releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                        <div className="movie__genres">
                            {
                                currentMovieDetail && currentMovieDetail.genres
                                ? 
                                currentMovieDetail.genres.map(genre => (
                                    <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                                )) 
                                : 
                                ""
                            }
                            <button className="text-black rounded-2xl" onClick={addToList}>{btnState}</button>
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Overview</div>
                        <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                    </div>
                    
                </div>
            </div>
            <div className="movie__links">
                <div className="movie__heading">Useful Links</div>
                {
                    currentMovieDetail && currentMovieDetail.homepage && <a href={currentMovieDetail.homepage} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__homeButton movie__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
                {
                    currentMovieDetail && currentMovieDetail.imdb_id && <a href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
            </div>
           <MainReview />
        </div>
        </>
    )
}

export default MainUpInfo