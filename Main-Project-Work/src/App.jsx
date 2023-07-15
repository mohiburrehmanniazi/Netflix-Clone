/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import ImageSlider from "./Components/ImageSlider";
import MovieList from "./Components/MovieList";
import TvList from "./Components/tvShow";
import UpComingList from "./Components/upcoming";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <div>
        <Router>
        <Navbar />
          <Routes>
            <Route  element={<h1>this is detail page</h1>}></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>
          </Routes>
        </Router>
       
        <ImageSlider />
        <MovieList />
        <TvList />
          <UpComingList />
          
          
      </div>

    </>
  );
}

export default App;
