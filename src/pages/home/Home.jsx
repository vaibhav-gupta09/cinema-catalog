import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Home.css'
import Genre from '../../components/genre/Genre';
import { getGenreList, setSelectedGenre } from '../../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../../components/pagination/Pagination';
import Header from '../../components/header/Header';

const Home = () => {
  const dispatch = useDispatch();
  const { genreList, selectedGenre } = useSelector((state) => state.reducer);

  const handleChange = (e)=>{
        dispatch(setSelectedGenre(e.target.value));
  }

  useEffect(()=>{
    dispatch(getGenreList());
  }, [dispatch])
  return (
    <div className="home-wrapper">
      <Header/>
      <div className="select-container">
        <select
          id="movie-dropdown"
          title="Select a movie"
          value={selectedGenre}
          onChange={(e) => handleChange(e)}
        >
          <option> Select Movie Genre </option>
          {genreList.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>
      <Genre genreId={selectedGenre} />
      <Pagination />
    </div>
  );
}

export default Home