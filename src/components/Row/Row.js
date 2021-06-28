import React from 'react';
// Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';

// Components
import Thumbnails from '../Thumbnails/Thumbnails';
import Loading from '../Loading/Loading';

// Custom hooks and constants
import { useFetchMovies } from '../../hooks/useFetchMovies';
import {
  IMAGE_BASE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE,
} from '../../constants/config';
import NoImage from '../../images/no_image.jpg'


SwiperCore.use([Navigation]);


const Row = ({ fetchUrl, title, genreId }) => {
  const { movies, loading, error } = useFetchMovies(fetchUrl, genreId);

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <React.Fragment>
      <div className="Row">
        {!loading && (
          <div className="Row_columnContainer container">
            <h1 className="Row_title">
              {title}
            </h1>
            <div className="Row_rowContainer">
              <Swiper
                tag="section"
                wrapperTag="ul"
                id="main"
                navigation
                slidesPerView={4}
                spaceBetween={10}
              >
                {movies.map((movie) => {
                  return (
                    <SwiperSlide
                      tag="li"
                      key={movie.id}
                    >
                      <Thumbnails
                        titleId={movie.id}
                        movie={movie}
                        key={movie.id}
                        media_type={movie.media_type}
                        image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage}
                        clickable
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Row;
