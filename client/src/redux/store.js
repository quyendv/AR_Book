import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import globalReducer from './features/globalSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    global: globalReducer,
  },
});

export default store;
