import React, {useState, useEffect} from 'react'
import {IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE} from '../../constants/config'
import {requests} from '../../constants/requests'
import axios from 'axios'
import {useFetchMovies} from '../../hooks/useFetchMovies'

import HeroImage from '../HeroImage/HeroImage'

const Banner = () => {
  const {loading} = useFetchMovies()
  const [movie, setMovie] = useState([])

  useEffect(()=> {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(requests.fetchTrending)
        setMovie(
          response.data.results[
            Math.floor(Math.random() * response.data.results.length - 1)
          ]
        )
      } catch(e) {
        console.log(e);
      }
    }
    fetchMovie()
  }, [])

  console.log('banner', movie)

  return (
    <React.Fragment>
      {!loading && (
        <HeroImage 
          movie={movie}
          backDrop={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}`}
        />
      )}
    </React.Fragment>
  )
}

export default Banner