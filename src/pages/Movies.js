import React from 'react'
import {useMovies} from '../hooks/useMovies'
import {Loading, MoviesList} from '../components'



const Movies = () => {
  const {state, loading, error, search} = useMovies()

  if(loading) {
    return <Loading />
  }

  return (
    <React.Fragment>
      <MoviesList />
    </React.Fragment>
  )
}

export default Movies