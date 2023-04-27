import { Height } from '@mui/icons-material';
import React from 'react';
import {Link} from 'react-router-dom';
import './Card.css';
import defaultImg from '../../assets/default.jpg'
const Card = ({movieData}) => {
  return (
    <div className="card-wrapper">
      <img
        className="movie-img"
        // style={{ display: "block", height: "200px", width: "100%" }}
        src={
          movieData.poster_path
            ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}`
            : defaultImg
        }
      />
      <span className="movie-title">{movieData.title}</span>
      <Link className="detail-btn" to={`movie/${movieData.id}`}>
        View More Details
      </Link>
    </div>
  );
}

export default Card