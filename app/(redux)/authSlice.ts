import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  token: null,
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      const currentUser = JSON.stringify({
        ...action.payload?.user,
        token: action?.payload?.token,
      });
      AsyncStorage.setItem('currentUser', currentUser);
    },
    logout(state) {
      console.log('Logout');
      state.token = null;
      state.isAuthenticated = false;
      state.user = null;
      AsyncStorage.removeItem('currentUser');
    },
    loadToken(state, action) {
      const { token, ...user } = JSON.parse(action.payload);
      state.token = token;
      state.isAuthenticated = true;
      state.user = user;
    },
  },
});

export const { login, logout, loadToken } = authSlice.actions;

export default authSlice.reducer;
