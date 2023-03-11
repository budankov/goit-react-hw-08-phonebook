import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shared/api/auth';

export const singup = createAsyncThunk(
  'auth/singup',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await api.singup(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
