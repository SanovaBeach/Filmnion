import React from 'react';
import { Row, Loading, Banner } from '../components';
import { requests } from '../constants/requests';
import { useFetchMovies } from '../hooks/useFetchMovies';

const Home = () => {
  const { loading } = useFetchMovies();

  if (loading) {
    return <Loading page={true} />;
  }

  return (
    <React.Fragment>
      <Banner />
      <Row fetchUrl={requests.fetchTrending} title="Most Popular" />
      <Row fetchUrl={requests.fetchTopRated} title="Top Rated" />
      <Row fetchUrl={requests.fetchGenre} title="Action Movies" genreId={28} />
      <Row fetchUrl={requests.fetchGenre} title="Comedy Movies" genreId={35} />
      <Row fetchUrl={requests.fetchGenre} title="Horror Movies" genreId={27} />
      <Row fetchUrl={requests.fetchTvPopular} title="Popular TV Shows" />
      <Row fetchUrl={requests.fetchTvTopRated} title="Top Rated TV Shows" />
    </React.Fragment>
  );
};

export default Home;
