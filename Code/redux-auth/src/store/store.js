import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';  // This is correct

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
