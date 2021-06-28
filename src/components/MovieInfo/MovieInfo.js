import React from 'react';
import Thumbnails from '../Thumbnails/Thumbnails';

import NoImage from '../../images/no_image.jpg';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../constants/config';
import {calcTime} from '../../constants/helpers'

const MovieInfo = ({ movie, backDrop }) => {
  return (
    <React.Fragment>
      <div
        className="MovieInfo"
        style={{
          background: `url(${backDrop})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="MovieInfo_container container">
          <Thumbnails
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
            clickable={false}
          />
          <div className="MovieInfo_text">
            <h1 className="MovieInfo_title">
              {movie.original_name || movie.original_title}
            </h1>
            <h3 className="MovieInfo_plot">PLOT</h3>
            <p className="MovieInfo_overview">{movie.overview}</p>
            <div className="MovieInfo_desc">
              <div className="MovieInfo_ratingContainer">
                <h3 className="MovieInfo_descTitle">Rating</h3>
                <div className="MovieInfo_info">{movie.vote_average}</div>
                <h3 className="MovieInfo_descTitle">Popularity</h3>
                <div className="MovieInfo_info">{movie.popularity}</div>
                {movie.revenue && (
                  <div>
                    <h3 className="MovieInfo_descTitle">Revenue</h3>
                    <div className="MovieInfo_info">
                      ${movie.revenue.toLocaleString()}
                    </div>
                  </div>
                )}
                {movie.runtime && (
                  <div>
                    <h3 className="MovieInfo_descTitle">Runtime</h3>
                    <div className="MovieInfo_info">
                      {calcTime(movie.runtime)}
                    </div>
                  </div>
                )}
              </div>
              {movie.directors && (
                <div className="MovieInfo_directorContainer">
                  <h3 className="MovieInfo_directors">
                    DIRECTOR{movie.directors.length > 1 ? 'S' : ''}
                  </h3>
                  {movie.directors.map((director) => (
                    <p className="director" key={director.credit_id}>
                      {director.name}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MovieInfo;
