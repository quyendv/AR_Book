import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: 'null',
  },
  reducers: {
    setUser: (state, action) => {
      if (!action.payload) {
        localStorage.removeItem('actkn');
      } else if (action.payload.token) {
        localStorage.setItem('actkn', action.payload.token);
      }
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;