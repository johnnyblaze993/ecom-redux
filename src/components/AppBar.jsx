import { Movie, Person } from '@mui/icons-material';
import { Paper, Tooltip } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { AppBar as BarApp } from '@mui/material';

const AppBar = () => {
  const [show, setShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  return (
    <div>
      {' '}
      <BarApp>
        <Paper
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 20px',
            height: '80px',
            zIndex: 100,
          }}
        >
          <Tooltip
            title="Home"
            arrow
            sx={{
              position: 'sticky',
            }}
          >
            <Movie
              sx={{
                fontSize: '40px',
                color: show ? '#fff' : '#111',
              }}
            />
          </Tooltip>
          <Tooltip title="Profile" arrow>
            <Person
              sx={{
                fontSize: '40px',
              }}
            />
          </Tooltip>
        </Paper>{' '}
      </BarApp>
    </div>
  );
};

export default AppBar;
