import React from 'react';
import MovieInfo from '../MovieInfo/MovieInfo';
import Actors from '../Actors/Actors';
import Season from '../Season/Season';

import NoImage from '../../images/no_image.jpg';

import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../constants/config';

const MovieDetails = ({ movie, credits, media_type }) => {
  return (
    <React.Fragment>
      <MovieInfo
        movie={movie}
        backDrop={
          movie.poster_path
            ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}`
            : NoImage
        }
      />
      <Actors credits={credits} />
      {media_type === 'tv' && (
        <Season titleId={movie.id} seasons={movie.seasons} />
      )}
    </React.Fragment>
  );
};

export default MovieDetails;
