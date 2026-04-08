import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Middleware для входа
export const loginUser = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    if (data.login === 'admin' && data.password === '123') {
      return { name: 'Админ', token: 'secret-key' };
    } else {
      return rejectWithValue('Неверный логин или пароль!');
    }
  }
);

// Middleware для регистрации
export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    if (userData.login.length < 2) {
      return rejectWithValue("Имя слишком короткое!");
    }
    // Возвращаем данные как "успех"
    return { name: userData.login, token: 'new-user-token' };
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, error: null },
  reducers: {
    logout: (state) => { state.user = null; }
  },
  extraReducers: (builder) => {
    builder
      // Логика для ВХОДА
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
      })
      // Логика для РЕГИСТРАЦИИ (чтобы кнопка заработала)
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload; // Записываем юзера, и App.jsx его увидит
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.payload;
      });
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;