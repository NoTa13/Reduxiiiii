import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'; // Путь к твоему слайсу

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});