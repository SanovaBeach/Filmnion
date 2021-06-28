import React from 'react';
import { Row, Loading } from '../components';
import { requests } from '../constants/requests';
import {useFetchMovies} from '../hooks/useFetchMovies'

const Home = () => {
  const {loading} = useFetchMovies()

  if(loading) {
    return <Loading />
  }

  return (
    <React.Fragment>
      <Row fetchUrl={requests.fetchTrending} title="Most Popular" />
      <Row fetchUrl={requests.fetchTopRated} title="Top Rated" />
      <Row fetchUrl={requests.fetchGenre} title="Action Movies" genreId={28} />
      <Row fetchUrl={requests.fetchGenre} title="Comedy Movies" genreId={35} />
      <Row fetchUrl={requests.fetchGenre} title="Horror Movies" genreId={27} />
    </React.Fragment>
  );
};

export default Home;
