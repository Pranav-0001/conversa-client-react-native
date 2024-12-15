import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import onlineUsersReducer from './onlineUsersSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    onlineUsers: onlineUsersReducer,
  },
});
