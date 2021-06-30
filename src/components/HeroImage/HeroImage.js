import React from 'react';
import {Link} from 'react-router-dom'

const HeroImage = ({ backDrop, movie }) => {
  console.log('hero image', movie)
  return (
    <React.Fragment>
      <header
        className="HeroImage"
        style={{
          backgroundImage: `url(${backDrop})`,
          backgroundSize: 'cover',
          backgroundPosition: '100% center',
          height: '60rem',
          position: 'relative'
        }}
      >
      <div className="HeroImage_contents container">
        <div className="HeroImage_text">
          <h1 className="HeroImage_title">{movie.original_title || movie.original_name}
          </h1>
          <p className="HeroImage_overview">{movie.overview }</p>

        </div>
      </div>
      </header>
    </React.Fragment>
  );
};

export default HeroImage;
