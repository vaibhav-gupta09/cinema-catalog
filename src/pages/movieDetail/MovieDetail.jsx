import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { setCastAndCrew, setMovieDetail } from '../../redux/action';
import AutoMovingCrousel from '../../components/autoMovingCrousel/AutoMovingCrousel';
import defaultMovie from '../../assets/movieDefault.jpg';
import './MovieDetail.css';
const MovieDetail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {movieDetail} = useSelector((state)=>state.reducer);
    
    useEffect(()=>{
      dispatch(setMovieDetail(id));
      dispatch(setCastAndCrew(id));
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, [dispatch])
    
  return (
    <div className="detail-container">
      <h1 className="movie-name">{movieDetail.title}</h1>
      <img
        className="main-movie-img"
        src={
          movieDetail.backdrop_path
            ? `https://image.tmdb.org/t/p/w500${movieDetail.backdrop_path}`
            : defaultMovie
        }
      />
      <p style={{ color: "orangered", fontSize: "1.2rem" }}>
        (Release Date: {movieDetail.release_date})
      </p>
      <p className="overview">{movieDetail.overview}</p>
      <AutoMovingCrousel />
      <Link className="back-home-btn" to="/">
        {" "}
        Home{" "}
      </Link>
    </div>
  );
}

export default MovieDetail