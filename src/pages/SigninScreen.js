import { Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SigninScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
  };

  const signIn = (e) => {
    e.preventDefault();
  };

  return (
    <div
      style={{
        width: '60%',
      }}
    >
      <form
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: 'white',
            textAlign: 'center',
            marginBottom: '20px',
            fontWeight: 'bold',
            textTransform: 'capitalize',
          }}
        >
          Sign In
        </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={signIn}
        >
          Sign In
        </Button>
        <Typography
          sx={{
            fontSize: '15px',
            alignSelf: 'flex-start',
            //gray color
          }}
          variant="h4"
        >
          <span
            style={{
              color: 'gray',
            }}
          >
            Dont have an account yet?{' '}
          </span>{' '}
          <motion.span
            style={{
              //make a little bolder
              fontWeight: '500',
              //on hover show a pointer and underline
            }}
            //on hover show a pointer and underline
            whileHover={{
              cursor: 'pointer',
              textDecoration: 'underline',
              fontWeight: '700',
              transition: {
                duration: 0.9,
              },
            }}
            onClick={register}
          >
            Lets get you started.{' '}
          </motion.span>
        </Typography>
      </form>
    </div>
  );
};

export default SigninScreen;
