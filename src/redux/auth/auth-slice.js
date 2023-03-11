import { createSlice } from '@reduxjs/toolkit';

import { singup } from './auth-operations';

const initialState = {
  user: {},
  token: '',
  isLoading: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(singup.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(singup.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLoading = true;
      })
      .addCase(singup.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default authSlice.reducer;
