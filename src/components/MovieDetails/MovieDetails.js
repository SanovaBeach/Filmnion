import React from 'react';
import HeroImage from '../HeroImage/HeroImage';
import MovieInfo from '../MovieInfo/MovieInfo';
import Actors from '../Actors/Actors';

import NoImage from '../../images/no_image.jpg'

import {
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
} from '../../constants/config';

const MovieDetails = ({ movie, credits }) => {

  return (
    <React.Fragment>
      <MovieInfo 
        movie={movie} 
        backDrop={movie.poster_path ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}` : NoImage}
      />
      <Actors 
        credits={credits}
      />
    </React.Fragment>
  )
};

export default MovieDetails;
