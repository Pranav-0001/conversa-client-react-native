import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  onlineUsers: [] as string[],
};

const onlineUsersSlice = createSlice({
  name: 'onlineUsers',
  initialState,
  reducers: {
    addOnlineUser(state, action) {
      console.log({ action: action.payload }, 'ACTION');
      state.onlineUsers = action.payload;
    },
    removeOnlineUser(state, action) {
      state.onlineUsers = state.onlineUsers.filter((id) => id !== action.payload);
    },
  },
});

export const { addOnlineUser, removeOnlineUser } = onlineUsersSlice.actions;

export default onlineUsersSlice.reducer;
