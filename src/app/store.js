import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import todoReducer from '../features/todoSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    todos: todoReducer, // Добавили список дел
  },
});