import {useState, useEffect} from 'react'
import axios from 'axios'

const baseUrl = 'https://api.themoviedb.org/3'
const apiKey = process.env.REACT_APP_KEY

const initialState = {
  page: 0,
  results: [],
  totalPages: 0,
  totalResult: 0,
}

export const useMovies = () => {
  const [state, setState] = useState(initialState)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [search, setSearch] = useState('')

  const fetchMovie = async(page, search = '') => {
    try {
      setLoading(true)
      setError(false)
      const response = search 
        ? await axios.get(`${baseUrl}/search/movie?api_key=${apiKey}`) 
        : await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US`)
      console.log(response)
      // setState((prev) => ({
      //   ...response,
      //   results: page > 1 ? [...prev.results, ...response.results] : [...response.results]
      // }))

    } catch(e) {
      setError(true)      
    }
    setLoading(false)
  }

  useEffect(()=> {
    fetchMovie(1)
  }, [])

  return {state, loading, error, search}

}