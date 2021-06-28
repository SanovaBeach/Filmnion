import axios from 'axios'

const baseUrl = 'https://api.themoviedb.org/3'
const apiKey = process.env.REACT_APP_KEY

export const requests = {
  fetchTrending: `${baseUrl}/trending/all/week?api_key=${apiKey}&language=en-US`,
  fetchNetflixOriginals: `${baseUrl}/discover/tv?api_key=${apiKey}&with_networks=213`,
  fetchTopRated: `${baseUrl}/movie/top_rated?api_key=${apiKey}&language=en-US`,
  fetchGenre: `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=`,
  fetchMovieDetail: `${baseUrl}/movie/`,
  fetchTvDetail: `${baseUrl}/tv/`
};

