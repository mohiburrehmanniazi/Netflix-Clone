/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import MovieList from "./Components/MovieList";
import TvShow from "./Components/TvShow";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainMovInfo from "./MainMovCard/MainMovInfo"
import UpComing from "./Components/UpComing";
import MainTvInfo from "./MainMovCard/MainTvInfo";
import MainUpInfo from "./MainMovCard/MainUpInfo";

function App() {
  return (
    <>
      <div>
        <Router>
        
          <Routes>
            <Route path='/' element={<Navbar />}></Route>
            <Route path='/MainMovCard/MainMovInfo/:id' element={<MainMovInfo/>}></Route>
            <Route path='/MainMovCard/MainTvInfo/:id' element={<MainTvInfo/>}></Route>
            <Route path='/MainMovCard/MainUpInfo/:id' element={<MainUpInfo/>}></Route>
            <Route path='/movies/TV_Shows' element={<TvShow/>}></Route>
            <Route path='/movies/Movies' element={<MovieList/>}></Route>
            <Route path='/movies/Upcoming' element={<UpComing/>}></Route>
          </Routes>
        </Router>
       
        
        {/* <TvList />
          <UpComingList /> */}
          
          
      </div>

    </>
  );
}

export default App;
