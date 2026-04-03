import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, error: null },
  reducers: {
    logout: (state) => { state.user = null; }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
      });
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;