import './App.css';
import HomeScreen from './pages/homescreen/HomeScreen';
import { Routes, Route } from 'react-router-dom';
import LoginScreen from './pages/LoginScreen';

function App() {
  const user = null;
  return (
    <div>
      {!user ? (
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
