import { Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { motion } from 'framer-motion';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { useState } from 'react';
import { auth, db } from '../firebase';
import { getAuth } from 'firebase/auth';

const SigninScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = getAuth();

  const register = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        // Signed in
        const userlog = userCredential.user;
        console.log(userlog);
      }
    );
  };

  const signIn = async (e) => {
    e.preventDefault();

    await signInWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      }
    );
  };

  return (
    <div
      style={{
        width: '60%',
      }}
    >
      <form
        onSubmit={signIn}
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
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
          fullWidth
          id="email"
          label="Email Address"
        />
        <TextField
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
          fullWidth
          id="password"
          label="Password"
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
            Lets get you started.
          </motion.span>
        </Typography>
      </form>
    </div>
  );
};

export default SigninScreen;
