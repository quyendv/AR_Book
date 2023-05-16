import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: JSON.parse(localStorage.getItem('user')) || null,
  },
  reducers: {
    setUser: (state, action) => {
      // if (!action.payload) {
      //   localStorage.removeItem('actkn');
      // } else if (action.payload.token) {
      //   localStorage.setItem('actkn', action.payload.token);
      // }
      if (!action.payload) {
        localStorage.removeItem('user');
      } else {
        localStorage.setItem('user', JSON.stringify(action.payload));
      }
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
