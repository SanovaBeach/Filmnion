import { useState, useEffect } from 'react';
import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = process.env.REACT_APP_KEY;

const initialState = {
  page: 1,
  results: [],
  totalPages: 0,
  totalResult: 0,
};

export const useMovies = () => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState('');
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchMovie = async (page, search = '') => {
    try {
      setLoading(true);
      setError(false);
      const response = search
        ? await axios.get(`${baseUrl}/search/movie?api_key=${apiKey}&language=en-US&query=${search}&page=${page}`)
        : await axios.get(
            `${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`
          );
      console.log('response data', response.data);
      const data = response.data
      setState((prev) => ({
        ...data,
        results:
          page > 1
            ? [...prev.results, ...data.results]
            : [...data.results],
      }));
    } catch (e) {
      setError(true);
    }
    setLoading(false);
  };

  // initial render
  useEffect(() => {
    fetchMovie(1, search);
  }, [search]);

  // if iLoadingMore === true
  useEffect(() => {
    if (!isLoadingMore) return;
    console.log('fetching loading more')
    fetchMovie(state.page + 1, search);
    setIsLoadingMore(false);
  }, [state.page, isLoadingMore, search]);

  return { state, loading, error, search, setSearch, setIsLoadingMore };
};
