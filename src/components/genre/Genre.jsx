import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../card/Card';
import { useDispatch, useSelector } from "react-redux";
import { setMovieList } from '../../redux/action';
import './Genre.css'
const Genre = (props) => {
 
  const dispatch = useDispatch();
  const {selectedGenre, movies, page} = useSelector((state)=>state.reducer);
  // const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    // const { data } = await axios.get(
    //   `https://api.themoviedb.org/3/discover/movie?api_key=1cf50e6248dc270629e802686245c2c8&sort_by=popularity.desc&with_genres=${props.genreId}&with_original_language=hi`
    // );
    
    // setMovies(data.results)
    
  }

  useEffect(() => {
    dispatch(setMovieList(selectedGenre, page));
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [dispatch, page, selectedGenre]);
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id} className="card-container">
          <Card movieData={movie} />
        </div>
      ))}
    </div>
  );
}

export default Genre