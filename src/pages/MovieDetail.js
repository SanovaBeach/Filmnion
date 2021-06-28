import React from 'react'
import {useParams} from 'react-router-dom'
import {useMovieDetail} from '../hooks/useMovieDetail'
import {Loading, MovieDetails} from '../components'

const MovieDetail = () => {
  const {media_type, titleId} = useParams()
  const {movie, credits, loading, error} = useMovieDetail(media_type, titleId)

  if(loading) return <Loading />

  return (
    <React.Fragment>
        <MovieDetails 
          movie={movie}
          credits={credits}
        />
      
    </React.Fragment>
  )
}

export default MovieDetail