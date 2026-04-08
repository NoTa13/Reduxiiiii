import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [
      { id: 1, title: 'Изучить Redux', completed: false, description: 'Разработать приложение с Middleware' },
      { id: 2, title: 'Настроить Git', completed: true, description: 'Запушить проект на GitHub' },
    ],
  },
  reducers: {
    // CREATE
    addTodo: (state, action) => {
      state.items.push({
        id: Date.now(),
        title: action.payload.title,
        description: action.payload.description || '',
        completed: false,
      });
    },
    // UPDATE
    toggleTodo: (state, action) => {
      const todo = state.items.find(item => item.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    // DELETE
    deleteTodo: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    // EDIT (Update Title/Desc)
    editTodo: (state, action) => {
      const { id, title, description } = action.payload;
      const todo = state.items.find(item => item.id === id);
      if (todo) {
        todo.title = title;
        todo.description = description;
      }
    }
  },
});

export const { addTodo, toggleTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;