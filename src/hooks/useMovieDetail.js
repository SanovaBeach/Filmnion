import {useState, useEffect} from 'react'
import axios from 'axios'

const baseUrl = 'https://api.themoviedb.org/3'

const apiKey = process.env.REACT_APP_KEY

export const useMovieDetail = (media_type, titleId) => {
  const [movie, setMovie] = useState([])
  const [credits, setCredits] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)


  const fetchMovieDetail = async() => {
    try {
      setLoading(true)
      setError(false)
      const response = await 
        axios.get(`${baseUrl}/${media_type}/${titleId}?api_key=${apiKey}${media_type === 'tv' ? '&append_to_response=tv-season,tv-episodes' :''}`)
      const creditsResponse = await 
        axios.get(`${baseUrl}/${media_type}/${titleId}/credits?api_key=${apiKey}`)
      setMovie(response.data)
      setCredits(creditsResponse.data.cast)

    } catch(e) {
      setError(true)      
    }
    setLoading(false)
  }

  useEffect(()=> {
    fetchMovieDetail()
  }, [media_type, titleId])

  return {movie, credits, loading, error}

}