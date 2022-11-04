import React from 'react';
import AppBar from '../components/AppBar';
import Banner from './Banner';
import Row from './Row';

import requests from '../Requests';
import { Stack } from '@mui/material';

const HomeScreen = () => {
  return (
    <div>
      <AppBar />
      <Banner />
      <Stack>
        <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row
          title="Comedy Movies"
          fetchUrl={requests.fetchComedyMovies}
          isLargeRow
        />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row
          title="Documentaries"
          fetchUrl={requests.fetchDocumentaries}
          isLargeRow
        />
      </Stack>
    </div>
  );
};

export default HomeScreen;
