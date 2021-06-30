import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetchMovies = (fetchUrl, genreId) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      setError(false);
      const response = genreId 
        ? await axios.get(`${fetchUrl}${genreId}`) 
        : await axios.get(fetchUrl)
      console.log(response)
      setMovies(response.data.results)
    } catch (e) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies();
  }, [fetchUrl]);


  return { movies, loading, error };
};
