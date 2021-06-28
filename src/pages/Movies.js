import React from 'react'
import {useMovies} from '../hooks/useMovies'
import {Loading} from '../components'

const Movies = () => {
  const {state, loading, error, search} = useMovies()

  return (
    <React.Fragment>
      
    </React.Fragment>
  )
}

export default Movies