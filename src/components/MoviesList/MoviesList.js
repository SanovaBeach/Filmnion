import React from 'react'
import Thumbnails from '../Thumbnails/Thumbnails'
import Loading from '../Loading/Loading'
import {useMovies} from '../../hooks/useMovies'

import {IMAGE_BASE_URL, POSTER_SIZE} from '../../constants/config'


const MoviesList = () => {
  const {state, loading, error, setSearch, setIsLoadingMore} = useMovies()

  return (
    <React.Fragment>
      <div className="MoviesList">
        <div className="MoviesList_container container">
          {state.results.map((movie) => {
            return(
              <Thumbnails 
                clickable
                media_type={movie.media_type}
                image={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`}
                key={movie.id}
                titleId={movie.id} 
              />
            )
          })}
        </div>
        {loading && <Loading />}
        {state.page < state.total_pages && !loading && (
          <button className="MoviesList_loadMore" 
            onClick={() => setIsLoadingMore(true)}>
            Load More
          </button>
        )}
      </div>
    </React.Fragment>
  )
}

export default MoviesList