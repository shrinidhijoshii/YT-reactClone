import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      if (state.messages.length > 67) {
        state.messages.splice(0, state.messages.length/3);
      }
      state.messages.unshift(action.payload);
      console.log(state.messages.length);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
