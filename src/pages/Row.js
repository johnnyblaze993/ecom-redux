import { Box } from '@mui/material';
import React from 'react';
import Axios from '../Axios';

const Row = ({ title, fetchUrl }) => {
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
    <div>
      <h2>{title}</h2>

      <Box
        sx={{
          display: 'flex',
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
        {movies.map((movie) => (
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.name}
            key={movie.id}
            style={{ width: '200px', height: '300px', objectFit: 'contain' }}
          />
        ))}
      </Box>
    </div>
  );
};

export default Row;
