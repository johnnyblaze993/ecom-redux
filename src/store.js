import { congigureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';

export default congigureStore({
  reducer: {
    user: userReducer,
  },
});
