import { Movie } from '@mui/icons-material';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import SigninScreen from './SigninScreen';
import { auth } from '../firebase';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);
  const [email, setEmail] = useState('');

  const auth = getAuth();
  const currentUser = auth.currentUser;

  //   const signInUser = (e) => {
  //     e.preventDefault();
  //     signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       console.log(user);
  //     });
  //     setSignIn(true);
  //   };
  const signOutUser = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
    setSignIn(false);
  };

  return (
    <div
      style={{
        position: 'relative',
        padding: '20px',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',

        backgroundImage: `url("https://cdn.pixabay.com/photo/2016/01/22/08/17/banner-1155437__340.png")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: 1,
      }}
    >
      <Paper
        sx={{
          padding: '20px',
          width: '90%',
          height: '40%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          backgroundColor: 'rgba(0,0,0,0.8)',
          zIndex: 2,
          borderRadius: '10px',
        }}
        elevation={10}
      >
        <Box
          sx={{
            display: 'flex',
            width: '90%',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'absolute',
            //align top center
            top: '20px',
            left: '50%',
            transform: 'translate(-50%, 0)',
            zIndex: 3,
          }}
        >
          <Movie
            sx={{
              fontSize: '60px',
            }}
          />
          {currentUser ? (
            <Button variant="contained">Sign In</Button>
          ) : (
            <Button variant="contained" onClick={signOutUser}>
              Sign Out
            </Button>
          )}
        </Box>
        <>
          {signIn ? (
            <SigninScreen />
          ) : (
            <>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  zIndex: 2,
                }}
              >
                <Typography
                  variant="h1"
                  style={{
                    fontSize: '50px',
                    fontWeight: '800',
                    marginBottom: '20px',
                    textTransform: 'capitalize',
                  }}
                >
                  Stream movies, Live Tv & more.{' '}
                </Typography>
                <Typography
                  variant="h3"
                  style={{
                    fontSize: '30px',
                    fontWeight: '500',
                    marginBottom: '20px',
                    textTransform: 'capitalize',
                  }}
                >
                  Pause or Cancel subscription at anytime.
                </Typography>
                <Typography
                  variant="p"
                  style={{
                    fontSize: '15px',
                    fontWeight: '400',
                    marginBottom: '20px',
                    textTransform: 'capitalize',
                  }}
                >
                  Lets get started. Sign up and watch over multiple devices.
                </Typography>
                <Box
                  sx={{
                    display: 'flex',

                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <TextField
                    id="outlined-basic"
                    label="Enter your Email"
                    variant="outlined"
                    sx={{
                      height: '50px',
                      width: '60%',
                      textTransform: 'capitalize',
                      //change textfield border radius on top and bottom left
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '5px 0 0 5px',
                      },
                    }}
                  />
                  <Button
                    sx={{
                      height: '54px',
                      mt: '4px',
                    }}
                    variant="contained"
                    onClick={() => setSignIn(true)}
                  >
                    Start Streaming
                  </Button>
                </Box>
              </Box>
            </>
          )}
          <Box
            style={{
              width: '100%',
              height: '100vh',
              position: 'absolute',
              top: '0',
              left: '0',
              zIndex: '-1',
              backgroundColor: 'rgba(0,0,0,0.4)',
            }}
          ></Box>
        </>
      </Paper>
    </div>
  );
};

export default LoginScreen;
