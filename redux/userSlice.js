import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    authUser: null,
    otherUser: null,
    selectedUser: null,
    onlineUser:null,
  },
  reducers: {
    setauthUser: (state, action) => {
      state.authUser = action.payload;
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    setOtherUser: (state, action) => {
      state.otherUser = action.payload;
    },
    setOnlineUser: (state, action) => {
      state.onlineUser= action.payload;
    },
  },
});

export const { setauthUser, setSelectedUser, setOtherUser  ,setOnlineUser} = UserSlice.actions;
export default UserSlice.reducer;
 