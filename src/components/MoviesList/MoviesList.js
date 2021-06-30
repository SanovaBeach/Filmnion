import React from 'react'
import Thumbnails from '../Thumbnails/Thumbnails'
import Loading from '../Loading/Loading'
import SearchBar from '../SearchBar/SearchBar'
import {useMovies} from '../../hooks/useMovies'
import {useParams} from 'react-router-dom'

import {IMAGE_BASE_URL, POSTER_SIZE} from '../../constants/config'


const MoviesList = () => {
  const {media_type} = useParams()
  const {state, loading,  setSearch, setIsLoadingMore} = useMovies(media_type)

  return (
    <React.Fragment>
      <div className="MoviesList">
        <SearchBar setSearch={setSearch} media_type={media_type} />
        <div className="MoviesList_container container">
          {state.results.map((movie) => {
            return(
              <Thumbnails 
                clickable
                media_type={movie.media_type}
                image={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`}
                key={movie.id}
                titleId={movie.id} 
                media_type={media_type}
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

MoviesList.defaultProps = {
  media_type: 'movie'
}

export default MoviesList