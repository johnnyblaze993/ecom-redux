import { Box } from '@mui/material';
import React from 'react';
import Axios from '../Axios';
import { motion } from 'framer-motion';

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const request = await Axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <>
      <h2>{title}</h2>

      <Box
        sx={{
          display: 'flex',
          height: '100%',
          overflowX: 'scroll',
          overflowY: 'hidden',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          gap: '10px',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {movies.map((movie) =>
          (isLargeRow && movie.poster_path) ||
          (!isLargeRow && movie.backdrop_path) ? (
            <motion.img
              src={`https://image.tmdb.org/t/p/original/${
                isLargeRow ? movie?.poster_path : movie?.backdrop_path
              }`}
              alt={movie.name}
              key={movie.id}
              style={{ width: '200px', height: '300px', objectFit: 'contain' }}
            />
          ) : null
        )}
      </Box>
    </>
  );
};

export default Row;
