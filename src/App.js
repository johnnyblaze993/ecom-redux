import './App.css';
import HomeScreen from './pages/homescreen/HomeScreen';
import { Routes, Route } from 'react-router-dom';
import LoginScreen from './pages/LoginScreen';
import { useEffect } from 'react';
import { auth } from './firebase';

function App() {
  const user = null;

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user logged in
        console.log(authUser);
      } else {
        //user logged out
        console.log(authUser);
      }
    });
  }, []);

  return (
    <div>
      {user ? (
        <LoginScreen />
      ) : (
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
