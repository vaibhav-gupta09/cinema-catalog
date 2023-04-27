import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux';
import './AutoMovingCrousel.css';
import actorMale from '../../assets/actorMale.jpg';
import actorFemale from '../../assets/actorFemale.jpg';
import castDefault from '../../assets/castDefault.jpg';

const AutoMovingCrousel = () => {
  const {cast, crew} = useSelector((state)=>state.reducer);
  const slidesToShow = Math.min(cast.length, crew.length, 8);
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };
  

  return (
    <div className='crousel-container'>
      <h1>Cast</h1>
      <Slider {...settings} className="slider">
        {cast.map((person) => (
          <div className="cast-container">
            <img
              className="cast-img"
              src={
                person.profile_path
                  ? `https://image.tmdb.org/t/p/w500${person.profile_path}`
                  : person.gender === 1
                  ? actorFemale
                  : actorMale
              }
            />
            <p>
              <b>{person.name}</b>
            </p>
            <p> ({person.character?person.character:'N/A'}) </p>
          </div>
        ))}
      </Slider>
      <h1>Crew</h1>
      <Slider {...settings} className="slider">
        {crew.map((person) => (
          <div className="cast-container">
            <img
              className="cast-img"
              src={
                person.profile_path
                  ? `https://image.tmdb.org/t/p/w500${person.profile_path}`
                  : castDefault
              }
            />
            <p>
              <b>{person.name}</b>
            </p>
            <p> ({person.job?person.job:'N/A'}) </p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AutoMovingCrousel