import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import Axios from '../Axios';
import { useEffect, useState } from 'react';
import requests from '../Requests';

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await Axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,

          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          height: '448px',
          objectFit: 'contain',
        }}
      >
        {' '}
        <Typography fontWeight={700} variant="h1">
          {movie?.title || movie?.name || movie?.original_name}
        </Typography>
        <Box>
          <Button variant="contained" color="primary">
            Play
          </Button>
          <Button variant="contained" color="primary">
            My Favs
          </Button>
        </Box>
        <Typography fontWeight={500} variant="h4">
          {truncate(movie?.overview, 150)}
        </Typography>
      </Box>
      <Box
        sx={{
          //fade bottom
          backgroundImage:
            'linear-gradient(180deg, transparent, rgba(37,37,37,0.61), #111)',
          //   height: '448px',
          objectFit: 'contain',
        }}
      ></Box>
    </div>
  );
};

export default Banner;
